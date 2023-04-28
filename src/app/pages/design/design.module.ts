import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DesignComponent } from './design.component';

@NgModule({
  declarations: [DesignComponent],
  imports: [CommonModule, SharedModule],
})
export class DesignModule {}
