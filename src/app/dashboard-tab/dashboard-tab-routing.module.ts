import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardTabPage } from './dashboard-tab.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardTabPage,
    children: [
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
      {
        path: 'data',
        loadChildren: () => import('../data/data.module').then(m => m.DataPageModule)
      },
      {
        path: 'trend',
        loadChildren: () => import('../trend/trend.module').then(m => m.TrendPageModule)
      },
      {
        path: 'alarm',
        loadChildren: () => import('../alarm/alarm.module').then( m => m.AlarmPageModule)
      },
      {
        path: 'note',
        loadChildren: () => import('../note/note.module').then( m => m.NotePageModule)
      },
      {
        path: 'dashboard-edit',
        loadChildren: () => import('../dashboard-edit/dashboard-edit.module').then( m => m.DashboardEditPageModule)
      },
      {
        path: 'profile-edit',
        loadChildren: () => import('../profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('../info/info.module').then((m) => m.InfoPageModule),
      },
      {
        path: '',
        redirectTo: 'data',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'data',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardTabPageRoutingModule {}
