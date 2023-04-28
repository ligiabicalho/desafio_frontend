import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/interfaces';
import { RequestApiService } from '../../shared/services/request-api.service';

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
  isLoading = false;

  constructor(private router: Router, private service: RequestApiService) {}
  onSubmit() {
    this.isLoading = !this.isLoading;
    this.service.login(this.user).subscribe((data) => {
      this.service.setToken(data);
      this.router.navigate(['/home']);
    });
  }
}
