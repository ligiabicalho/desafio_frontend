import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, BannerComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [HeaderComponent, BannerComponent],
  providers: [],
})
export class SharedModule {}
