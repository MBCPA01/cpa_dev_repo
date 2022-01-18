import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEditPageRoutingModule } from './profile-edit-routing.module';

import { ProfileEditPage } from './profile-edit.page';
import { ProfileEditResolver } from './profile-edit.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEditPageRoutingModule
  ],
  declarations: [ProfileEditPage],
  providers: [ProfileEditResolver]
})
export class ProfileEditPageModule {}
