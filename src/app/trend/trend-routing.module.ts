import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendPage } from './trend.page';

const routes: Routes = [
  {
    path: '',
    component: TrendPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendPageRoutingModule {}
