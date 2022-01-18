import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebaseAuth from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import 'core-js/es/object/from-entries';

import { Photo } from '@capacitor/camera';
import { from, Observable, ReplaySubject } from 'rxjs';
import { DataStore } from '../../shell/data-store';
import { ImageListingModel } from '../../models/image-listing.model';
import { concatMap, filter, map } from 'rxjs/operators';
import { User } from 'firebase/auth';
import { deleteObject, getDownloadURL, getStorage, listAll,
  ListResult, ref, StorageReference, UploadResult,
  uploadString } from 'firebase/storage';

const db = getFirestore();



@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  sendEmailVerification: any;
  sendPasswordReset: any;
  firebaseLogin: any;
  auth: any;
  isAuth: any;
  aFirestore: any;

  public photos: string[] = [];

  private friendsDataStore: DataStore<ImageListingModel>;
  private postsDataStore: DataStore<ImageListingModel>;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  loggedUser= firebaseAuth.getAuth().currentUser;

  constructor(private router: Router, private route: ActivatedRoute) {}

  createUser(email, password) {
    this.auth = firebaseAuth.getAuth();
    this.firebaseLogin = firebaseAuth
      .createUserWithEmailAndPassword(this.auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        this.sendEmailVerification = firebaseAuth
          .sendEmailVerification(firebaseAuth.getAuth().currentUser)
          .then((res) => {
            window.alert('Confirmation de l\'envoie du courriel');
          })
          .catch((error) => {
            window.alert(error.message);
          });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  signInUser(email, password) {
    this.auth = firebaseAuth.getAuth();
    this.firebaseLogin = firebaseAuth
      .signInWithEmailAndPassword(this.auth, email.value, password.value)
      .then((res) => {
        if (this.auth.currentUser.emailVerified) {
          this.router.navigate([`/dashboard-tab/profile-edit`]);
          console.log('logged in');
        } else {
          console.log(this.auth);
          //this.presentToastWhenLogIn();
          return false;
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  signOutUser(){
    this.auth = firebaseAuth.getAuth();
    firebaseAuth.signOut(this.auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  userAuthInfo() {
    this.isAuth = firebaseAuth.getAuth().currentUser;
    return this.isAuth;
  }
  sendEmailConfirmation() {
    this.sendEmailVerification = firebaseAuth
      .sendEmailVerification(firebaseAuth.getAuth().currentUser)
      .then((res) => {
        window.alert('Un message à été envoyé à votre courriel correspondant');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  sendEmailRecovery(email) {
    this.sendPasswordReset = firebaseAuth
      .sendPasswordResetEmail(firebaseAuth.getAuth(), email)
      .then((res) => {
        window.alert('Un message à été envoyé à votre courriel correspondant');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  async getCollectionByPath(path) {
    const querySnapshot = await getDocs(collection(db, path));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  }
  async setSimpleCollectionByPath(path, data) {
    // Object.entries(data).forEach(
    //   ([key, value]) => console.log(key, value)
    // );
    try {
      const docRef = await addDoc(collection(db, path), {
        data
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
  deleteSimpleCollectionByPath(){
  }
  updateSimpleCollectionByPath(){
  }




  public getFriendsImagesDataSource(): Observable<ImageListingModel> {
    return this.getImages('public-files/friends');
  }

  public getFriendsImagesDataStore(dataSource: Observable<ImageListingModel>): DataStore<ImageListingModel> {
    // Check if we already loaded this object
    if (!this.friendsDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: ImageListingModel = new ImageListingModel();
      this.friendsDataStore = new DataStore(shellModel);
      this.friendsDataStore.load(dataSource);
    }

    return this.friendsDataStore;
  }

  public getPostsImagesDataSource(): Observable<ImageListingModel> {
    return this.getImages('public-files/posts');
  }

  public getPostsImagesDataStore(dataSource: Observable<ImageListingModel>): DataStore<ImageListingModel> {
    // Check if we already loaded this object
    if (!this.postsDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: ImageListingModel = new ImageListingModel();
      this.postsDataStore = new DataStore(shellModel);
      this.postsDataStore.load(dataSource);
    }

    return this.postsDataStore;
  }

  public getPrivateFilesDataSource(): Observable<ImageListingModel> {
    return this.getImages('private-files/' + firebaseAuth.getAuth().currentUser.uid);
  }

  public getPrivateFilesDataStore(dataSource: Observable<ImageListingModel>): DataStore<ImageListingModel> {

    // Initialize the model specifying that it is a shell model
    const shellModel: ImageListingModel = new ImageListingModel();

    const privateContentDataStore: DataStore<ImageListingModel> = new DataStore(shellModel);
    privateContentDataStore.load(dataSource);

    return privateContentDataStore;
  }

  // Save picture to file on device
  public async savePictureInFirebaseStorage(cameraPhoto: Photo) {

    // Get a reference to the storage service, which is used to create references in your storage bucket
    const storageRef = ref(getStorage());

    // Points to our firestorage folder 'private-files/userID'
    const imagesRef = ref(storageRef, 'private-files/' + firebaseAuth.getAuth().currentUser.uid);

    // Points to 'tutorial-files/file-name.jpeg'
    const fileName = new Date().getTime() + '.jpeg';
    const spaceRef = ref(imagesRef, fileName);

    const savedFile: UploadResult = await uploadString(spaceRef, cameraPhoto.base64String, 'base64');

    return await getDownloadURL(ref(imagesRef, savedFile?.metadata.name));
  }

  // Delete picture
  public deletePicture(photo: string, position: number) {
    // Remove this photo from the Photos reference data array
    this.photos.splice(position, 1);

    // get filename from url path
    const filename = photo.split(RegExp('(%2F)..*(%2F)'))[3].split('?')[0];

    // Get a reference to the storage service, which is used to create references in your storage bucket
    const storageRef = ref(getStorage());

    // Points to our firestorage folder 'private-files/userID'
    const imagesRef = ref(storageRef, 'private-files/' + firebaseAuth.getAuth().currentUser.uid);

    const imageToDeleteRef = ref(imagesRef, filename);
    // Delete the file
    return deleteObject(imageToDeleteRef);
  }

  private getImages(bucketPath: string): Observable<ImageListingModel> {
    // Get a reference to the storage service, which is used to create references in your storage bucket
    const storage = getStorage();

    // Create a storage reference from our storage service
    const storageRef = ref(storage);

    // Points to our firestorage folder with path bucketPath
    const folderRef = ref(storageRef, bucketPath);

    return from(this.getDownloadURLs(folderRef))
    .pipe(
      map(urls => {
        const model = new ImageListingModel();
        model.imagesUrls = urls;
        return model;
      })
    );
  }

  private getDownloadURLs(imagesRef: StorageReference): Promise<string[]> {
    return new Promise((resolve, reject) => {
      listAll(imagesRef)
      .then((listResult: ListResult) => {
        const downloadUrlsPromises: Promise<string>[] = [];

        listResult.items.forEach((itemRef: StorageReference) => {
          // returns the download url of a given file reference
          const itemUrl = getDownloadURL(ref(imagesRef, itemRef.name));
          downloadUrlsPromises.push(itemUrl);
        });

        Promise.all(downloadUrlsPromises)
        .then((downloadUrls: string[]) => resolve(downloadUrls));
      }).catch((error) => reject(error));
    });
  }
}
