import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { TktModuleComponent } from './tkt-module/tkt-module.component';

@NgModule({
  declarations: [HomeComponent, TktModuleComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class HomeModule {}
