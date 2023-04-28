import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, BannerComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [HeaderComponent, BannerComponent],
  providers: [],
})
export class SharedModule {}
