import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private info_key = 'user_info';
  private token_key = 'auth_token';
  private isAuth = 'isAuth';

  private baseURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {}

  setAuthToken(value: any) {
    localStorage.setItem(this.token_key, JSON.stringify(value));
  }
  getAuthToken() {
    const token: any = localStorage.getItem(this.token_key);
    return JSON.parse(token);

    // return JSON.parse(localStorage.getItem());
  }

  getBearerToken(): string {
    return this.getAuthToken() ? `Bearer ${this.getAuthToken()}` : '';
  }

  getUser(): Observable<Object> {
    return this.httpClient.get(this.baseURL);
  }
}
