import {inject, Injectable} from '@angular/core';
import {User} from '../views/register/register.component';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Credentials} from '../views/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentResponse: BehaviorSubject<AuthResponse | undefined> = new BehaviorSubject<AuthResponse | undefined>(undefined)

  get currentUser(): User | undefined {
    return this.currentResponse.value?.user
  }

  get currentName() {
    return this.currentUser?.username
  }

  get token() {
    return this.currentResponse.value?.accessToken
  }

  get isLogged(): boolean {
    return !!this.currentResponse.value
  }

  private http: HttpClient = inject(HttpClient)

  login(credential: Credentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>("/login", credential)
      // Ajouter des opérations lors de la préparation de l'observable
      .pipe(
        // Permet de lire la valeur qui sera retournée lors de la souscription
        tap(response => this.currentResponse.next(response))
      )
  }

  register(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>("/register",user)
  }

  logout(): void {
    this.currentResponse.next(undefined)
  }
}

export interface AuthResponse {
  accessToken: string,
  user: User
}
