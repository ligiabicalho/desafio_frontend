import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CourseModule } from './pages/course/course.module';
import { DesignModule } from './pages/design/design.module';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { QuizModule } from './pages/quiz/quiz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    HomeModule,
    CourseModule,
    HttpClientModule,
    QuizModule,
    DesignModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
