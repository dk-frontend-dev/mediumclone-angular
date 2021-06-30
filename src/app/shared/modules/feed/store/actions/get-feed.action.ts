import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '@shared/modules/feed/store/action-types'
import {GetFeedResponseInterface} from '@shared/modules/feed/types/get-feed-response.interface'

export const getFeedAction = createAction(ActionTypes.GET_FEED, props<{url: string}>())

export const getFeedSuccesAction = createAction(
  ActionTypes.GET_FEED_SUCCES,
  props<{feed: GetFeedResponseInterface}>()
)

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE)
