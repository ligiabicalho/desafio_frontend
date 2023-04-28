import { Component, Input } from '@angular/core';
import { ModulesEdu } from 'src/app/interfaces';

@Component({
  selector: 'app-tkt-module',
  templateUrl: './tkt-module.component.html',
  styleUrls: ['./tkt-module.component.css'],
})
export class TktModuleComponent {
  @Input() module: ModulesEdu = {
    name: '',
    bar: '',
    rota: '',
    image: '',
  };
}
