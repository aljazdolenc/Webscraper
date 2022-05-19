import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'/daily-deals', pathMatch:'full'},
  {path:'daily-deals', 
  loadChildren: ()=>
      import ('./dashboard/dashboard.module')
    .then(m=>m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
