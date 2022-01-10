import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DataPage } from './data.page';

import { DataPageRoutingModule } from './data-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataPageRoutingModule
  ],
  declarations: [DataPage]
})
export class DataPageModule {}
