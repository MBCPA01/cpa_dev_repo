import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
import { getStorage, ref, StorageReference } from 'firebase/storage';
import { from, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageListingModel } from 'src/models/image-listing.model';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { getAuth, updateProfile, updateEmail } from 'firebase/auth';
import { reauthenticateWithCredential } from '@angular/fire/auth';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit, OnDestroy {
  files: ImageListingModel;
  private subs: Subscription[] = [];
  // eslint-disable-next-line @typescript-eslint/member-ordering
  currentUser: any;

  constructor(
    public dataService: FirebaseService,
    public actionSheetController: ActionSheetController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.currentUser = this.dataService.loggedUser;
    console.log(this.currentUser);
  }

  ngOnInit() {
    const sub1 = this.route.data
      .pipe(
        map((resolvedRouteData) => {
          const sub2 = resolvedRouteData.data.state.subscribe(
            (dataModel: ImageListingModel) => {
              this.files = dataModel;
            }
          );
          this.subs.push(sub2);
        })
      )
      .subscribe();

    this.subs.push(sub1);
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }

  async openCameraComponent() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt, // prompts the user to select either the photo album or take a photo.
      quality: 90, // highest quality (0 to 100)
    });

    const savedImageFile = await this.dataService.savePictureInFirebaseStorage(
      capturedPhoto
    );
    console.log(savedImageFile);

    const auth = getAuth();
    updateProfile(auth.currentUser, {
      photoURL: savedImageFile,
    })
      .then(() => {
        // Profile updated!
        // ...
        console.log('update du profile avec photoURL');
        console.log(auth.currentUser);
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log('update du profile failed');
      });
  }

  public async showActionSheet(photo: string, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.dataService
              .deletePicture(photo, position)
              .then((x) => {
                // File deleted successfully
                this.files.imagesUrls.splice(position, 1);
              })
              .catch((error) => {
                // Uh-oh, an error occurred!
              });
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // Nothing to do, action sheet is automatically closed
          },
        },
      ],
    });
    await actionSheet.present();
  }

  updateUserData(displayName, photoURL, email) {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: displayName.value,
      photoURL: photoURL.value
    })
      .then(() => {
      })
      .catch((error) => {
        console.log('update du email failed');
      });
  }
}
