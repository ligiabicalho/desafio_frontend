import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { InProgressComponent } from './in-progress/in-progress.component';

@NgModule({
  declarations: [HeaderComponent, BannerComponent, InProgressComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [HeaderComponent, BannerComponent, InProgressComponent],
  providers: [],
})
export class SharedModule {}
