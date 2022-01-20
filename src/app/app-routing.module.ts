import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'dashboard-tab',
    loadChildren: () =>
      import('./dashboard-tab/dashboard-tab.module').then(
        (m) => m.DashboardTabPageModule
      ),
    //canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {
    path: 'home-tab',
    loadChildren: () =>
      import('./home-tab/home-tab.module').then((m) => m.HomeTabPageModule),
  },
  {
    path: '',
    redirectTo: 'home-tab',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
