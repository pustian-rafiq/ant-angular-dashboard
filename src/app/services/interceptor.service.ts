import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add auth header with jwt if account is logged in and request is to the api url
    const token = this.authService.getAuthToken();
    console.log('token', token);
    // const isLoggedIn = account?.token;
    // const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(request);
  }
}
