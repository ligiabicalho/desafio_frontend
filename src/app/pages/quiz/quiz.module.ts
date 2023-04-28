import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizComponent } from './quiz.component';

@NgModule({
  declarations: [QuizComponent],
  imports: [CommonModule, SharedModule],
})
export class QuizModule {}
