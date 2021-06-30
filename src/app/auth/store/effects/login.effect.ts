import {HttpErrorResponse} from '@angular/common/http'
import {catchError, map, switchMap, tap} from 'rxjs/operators'
import {createEffect, ofType, Actions} from '@ngrx/effects'
import {Injectable} from '@angular/core'
import {of} from 'rxjs'
import {Router} from '@angular/router'

import {AuthService} from '@/auth/services/auth.service'
import {loginAction, loginFailureAction, loginSuccesAction} from '@/auth/store/actions/login.action'
import {CurrentUserInterface} from '@shared/types/current-user.interface'
import {PersistanceService} from '@shared/services/persistance.service'

@Injectable()
export class LoginEffect {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accesToken', currentUser.token)
            return loginSuccesAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(loginFailureAction({errors: errorResponse.error.errors}))
          )
        )
      })
    )
  })

  redirectAfterSubmit$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccesAction),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      )
    },
    {dispatch: false}
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
