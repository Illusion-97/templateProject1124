import {inject, Injectable} from '@angular/core';
import {User} from '../views/register/register.component';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Credentials} from '../views/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http: HttpClient = inject(HttpClient)


  login(credential: Credentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>("/login", credential)
  }

  register(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>("/register",user)
  }

  logout(): void {

  }
}

export interface AuthResponse {
  accessToken: string,
  user: User
}
