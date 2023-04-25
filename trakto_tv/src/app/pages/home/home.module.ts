import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TktModuleComponent } from './tkt-module/tkt-module.component';



@NgModule({
  declarations: [
    HomeComponent,
    TktModuleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
