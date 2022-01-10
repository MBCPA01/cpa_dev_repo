import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardEditPageRoutingModule } from './dashboard-edit-routing.module';

import { DashboardEditPage } from './dashboard-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardEditPageRoutingModule
  ],
  declarations: [DashboardEditPage]
})
export class DashboardEditPageModule {}
