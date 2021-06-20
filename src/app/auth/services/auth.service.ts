import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

import {environment} from 'src/environments/environment'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'
import {RegisterRequestInterface} from '../types/register-request.interface'
import {AuthResponseInterface} from './../types/auth-response.interface'
import {LoginComponent} from './../components/login/login.component'
import {LoginRequestInterface} from './../types/login-request.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: RegisterRequestInterface | RegisterComponent): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users`
    return this.http.post<AuthResponseInterface>(url, {user: data}).pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface | LoginComponent): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users/login`
    return this.http.post<AuthResponseInterface>(url, {user: data}).pipe(map(this.getUser))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/user`
    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser))
  }
}
