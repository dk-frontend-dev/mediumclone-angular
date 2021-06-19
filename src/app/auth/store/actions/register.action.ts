import {createAction, props} from '@ngrx/store'

import {ActionTypes} from './../action-types'
import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {CurrentUserInterface} from 'src/app/shared/types/current-user.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backend-errors.interface'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterComponent}>()
)

export const registerSuccesAction = createAction(
  ActionTypes.REGISTER_SUCCES,
  props<{currentUser: CurrentUserInterface}>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{errors: BackendErrorsInterface}>()
)
