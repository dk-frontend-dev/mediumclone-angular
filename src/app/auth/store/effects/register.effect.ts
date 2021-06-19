import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {switchMap, map, catchError, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {of} from 'rxjs'
import {Router} from '@angular/router'

import {AuthService} from './../../services/auth.service'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {
  registerAction,
  registerFailureAction,
  registerSuccesAction
} from './../actions/register.action'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accesToken', currentUser.token)
            return registerSuccesAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(registerFailureAction({errors: errorResponse.error.errors}))
          )
        )
      })
    )
  })

  redirectAfterSubmit$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(registerSuccesAction),
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
