import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Documents } from 'src/app/pages/course/course.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestApiService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) {}
  getToken(): string | null {
    return localStorage.getItem('tkt-accessToken');
  }

  getLatestDocsEdit() {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.get<Documents>(
      // foi necessário retirar o param order_by=title, pois p/ meu usuário estava retornando sempre vazio.
      `${this.API}/document?total_per_page=10&order_orientation=desc`,
      httpOptions
    );
  }
  getAll() {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.http.get<Documents>(`${this.API}/document`, httpOptions);
  }
}
