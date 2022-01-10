import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TrendPage } from './trend.page';

import { TrendPageRoutingModule } from './trend-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrendPageRoutingModule
  ],
  declarations: [TrendPage]
})
export class TrendPageModule {}
