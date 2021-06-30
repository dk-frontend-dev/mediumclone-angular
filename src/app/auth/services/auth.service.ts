import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

import {RegisterRequestInterface} from '@/auth/types/register-request.interface'
import {AuthResponseInterface} from '@/auth/types/auth-response.interface'
import {LoginComponent} from '@/auth/components/login/login.component'
import {LoginRequestInterface} from '@/auth/types/login-request.interface'
import {RegisterComponent} from '@/auth/components/register/register.component'
import {environment} from '@environments/environment'
import {CurrentUserInterface} from '@shared/types/current-user.interface'
@Injectable()
export class AuthService {
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

  constructor(private http: HttpClient) {}
}
