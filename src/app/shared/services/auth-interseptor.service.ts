import {Observable} from 'rxjs'
import {Injectable} from '@angular/core'
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'

import {PersistanceService} from '@shared/services/persistance.service'

@Injectable()
export class AuthInterseptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistanseService.get('accesToken')
    request = request.clone({
      setHeaders: {Authorization: token ? `Token ${token}` : ''}
    })
    return next.handle(request)
  }

  constructor(private persistanseService: PersistanceService) {}
}
