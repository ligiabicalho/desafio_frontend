import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseComponent } from './course.component';
import { GridItemsComponent } from './grid-items/grid-items.component';
import { ItemRenderComponent } from './item-render/item-render.component';
import { ViewAllContentComponent } from './view-all-content/view-all-content.component';

@NgModule({
  declarations: [
    CourseComponent,
    GridItemsComponent,
    ItemRenderComponent,
    ViewAllContentComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [CourseComponent],
})
export class CourseModule {}
