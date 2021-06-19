import {createAction, props} from '@ngrx/store'

import {ActionTypes} from './../action-types'
import {LoginComponent} from './../../components/login/login.component'
import {BackendErrorsInterface} from 'src/app/shared/types/backend-errors.interface'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'

export const loginAction = createAction(ActionTypes.LOGIN, props<{request: LoginComponent}>())

export const loginSuccesAction = createAction(
  ActionTypes.LOGIN_SUCCES,
  props<{currentUser: CurrentUserInterface}>()
)
export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)
