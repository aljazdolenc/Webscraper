import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/daily-deals', pathMatch: 'full' },
  {
    path: 'daily-deals',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule)
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('./notifications/notifications.module')
        .then(m => m.NotificationsModule)
  },
  {
    path: 'watchlists',
    loadChildren: () =>
      import('./watchlist/watchlist.module')
        .then(m => m.WatchlistModule)
  },
  {
    path: 'edit-watchlist',
    loadChildren: () =>
      import('./add-edit/add-edit.module')
        .then(m => m.AddEditModule)
  },
  {
    path: 'add-watchlist',
    loadChildren: () =>
      import('./add-edit/add-edit.module')
        .then(m => m.AddEditModule)
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module')
        .then(m => m.SettingsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
