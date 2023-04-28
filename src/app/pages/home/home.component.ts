import { Component } from '@angular/core';
import { ModulesEdu } from 'src/app/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  modulesEdu: ModulesEdu[] = [
    {
      name: 'Material Didático',
      bar: 'bar-course.png',
      rota: '/course',
      image: 'module-course.png',
    },
    {
      name: 'Quiz',
      bar: 'bar-quiz.png',
      rota: '/quiz',
      image: 'module-quiz.png',
    },
    {
      name: 'Desenho',
      bar: 'bar-design.png',
      rota: '/design',
      image: 'module-design.png',
    },
    {
      name: 'Youtube',
      bar: 'bar-yt.png',
      rota: '/youtube',
      image: 'module-youtube.png',
    },
  ];
}
