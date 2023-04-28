import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponse, UserLogin } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestApiService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) {}

  login(user: UserLogin) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Accept: '*/*',
      }),
    };
    return this.http.post(
      `${this.API}/auth/signin`,
      JSON.stringify(user),
      httpOptions
    );
  }
  setToken(data: DataResponse) {
    if (data.access_token) {
      localStorage.setItem('tkt-accessToken', data.access_token);
    }
  }
}
