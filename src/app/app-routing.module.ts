import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'/daily-deals', pathMatch:'full'},
  {path:'daily-deals', 
  loadChildren: ()=>
      import ('./dashboard/dashboard.module')
    .then(m=>m.DashboardModule)
  },
  {path:'notifications', 
  loadChildren: ()=>
      import ('./notifications/notifications.module')
    .then(m=>m.NotificationsModule)
  },
  {path:'watchlist',
  loadChildren:()=>
    import ('./watchlist/watchlist.module')
    .then(m=>m.WatchlistModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
