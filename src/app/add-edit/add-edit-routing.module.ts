import { AddEditComponent } from './add-edit/add-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '',
        component:AddEditComponent
    }]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddEditRoutingModule { }