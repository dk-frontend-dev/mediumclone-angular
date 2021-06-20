import {catchError, map, switchMap} from 'rxjs/operators'
import {createEffect, ofType, Actions} from '@ngrx/effects'
import {Injectable} from '@angular/core'
import {of} from 'rxjs'

import {AuthService} from './../../services/auth.service'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'
import {PersistanceService} from './../../../shared/services/persistance.service'
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccesAction
} from './../actions/get-current-user.action'

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accesToken')
        if (!token) {
          return of(getCurrentUserFailureAction())
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => getCurrentUserSuccesAction({currentUser})),
          catchError(() => of(getCurrentUserFailureAction()))
        )
      })
    )
  })

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) {}
}
