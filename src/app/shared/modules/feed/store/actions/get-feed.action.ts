import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '@shared/modules/feed/store/action-types'
import {
  GetCompanyesInfoResponseInterface,
  GetFeedResponseInterface
} from '@shared/modules/feed/types/get-feed-response.interface'

export const getFeedAction = createAction(ActionTypes.GET_FEED, props<{url: string}>())

export const getFeedSuccesAction = createAction(
  ActionTypes.GET_FEED_SUCCES,
  props<{feed: GetFeedResponseInterface}>()
)

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE)

export const getCompanyesInfoAction = createAction(ActionTypes.GET_COMPANYES_INFO)

export const getCompanyesInfoSuccessAction = createAction(
  ActionTypes.GET_COMPANYES_INFO_SUCCESS,
  props<{companyesInfo: GetCompanyesInfoResponseInterface}>()
)
export const getCompanyesInfoFailureAction = createAction(ActionTypes.GET_COMPANYES_INFO)
