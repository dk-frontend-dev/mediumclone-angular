import {createAction, props} from '@ngrx/store'

import {CurrentUserInterface} from '@shared/types/current-user.interface'
import {ActionTypes} from '@/auth/store/action-types'

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER)

export const getCurrentUserSuccesAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCES,
  props<{currentUser: CurrentUserInterface}>()
)

export const getCurrentUserFailureAction = createAction(ActionTypes.GET_CURRENT_USER_FAILURE)
