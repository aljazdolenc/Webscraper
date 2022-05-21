import { AddEditRoutingModule } from './add-edit-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditComponent } from './add-edit/add-edit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddEditComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AddEditRoutingModule
  ]
})
export class AddEditModule { }
