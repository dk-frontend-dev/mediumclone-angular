import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '@/auth/store/action-types'
import {LoginComponent} from '@/auth/components/login/login.component'
import {BackendErrorsInterface} from '@shared/types/backend-errors.interface'
import {CurrentUserInterface} from '@shared/types/current-user.interface'

export const loginAction = createAction(ActionTypes.LOGIN, props<{request: LoginComponent}>())

export const loginSuccesAction = createAction(
  ActionTypes.LOGIN_SUCCES,
  props<{currentUser: CurrentUserInterface}>()
)
export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)
