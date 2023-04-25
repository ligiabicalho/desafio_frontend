import { Component } from '@angular/core';
import { UserLogin } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: UserLogin = {
    email: '',
    password: '',
  };

  onSubmit() {
    console.log('Clicou!');
  }
}
