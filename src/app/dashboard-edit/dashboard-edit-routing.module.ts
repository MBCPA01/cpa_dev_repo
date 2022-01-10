import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardEditPage } from './dashboard-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardEditPageRoutingModule {}
