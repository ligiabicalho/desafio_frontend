import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './pages/course/course.component';
import { ViewAllContentComponent } from './pages/course/view-all-content/view-all-content.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '/login', component: LoginComponent, title: 'Trakto Login' },
  { path: '/home', component: HomeComponent, title: 'Trakto Edu' },
  {
    path: '/course',
    component: CourseComponent,
    title: '/Material Didático',
  },
  {
    path: '/course/viewAll',
    component: ViewAllContentComponent,
    title: 'Todos Materiais Didáticos',
  },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
