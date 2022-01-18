import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ImageListingModel } from '../../models/image-listing.model';
import { FirebaseService } from 'src/services/firebase/firebase.service';
import { DataStore } from '../../shell/data-store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileEditResolver implements Resolve<any> {
  constructor(private dataService: FirebaseService) {}

  resolve() {
    const filesDataSource: Observable<ImageListingModel> =
      this.dataService.getPrivateFilesDataSource();
    const filesDataStore: DataStore<ImageListingModel> =
      this.dataService.getPrivateFilesDataStore(filesDataSource);

    return filesDataStore;
  }
}
