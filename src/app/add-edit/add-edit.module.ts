import { CommonModule } from '@angular/common';
import { AddEditRoutingModule } from './add-edit-routing.module';
import { NgModule } from '@angular/core';
import { AddEditComponent } from './add-edit/add-edit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddEditComponent
  ],
  imports: [
    RouterModule,
    AddEditRoutingModule,
    CommonModule
  ]
})
export class AddEditModule { }
