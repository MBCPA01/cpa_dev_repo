import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardTabPageRoutingModule } from './dashboard-tab-routing.module';

import { DashboardTabPage } from './dashboard-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardTabPageRoutingModule
  ],
  declarations: [DashboardTabPage]
})
export class DashboardTabPageModule {}
