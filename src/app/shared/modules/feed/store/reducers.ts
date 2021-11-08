import {createReducer, on, Action} from '@ngrx/store'
import {routerNavigatedAction} from '@ngrx/router-store'

import {FeedStateInterface} from '@shared/modules/feed/types/feed-state.interface'
import {
  getFeedAction,
  getFeedSuccesAction,
  getFeedFailureAction,
  getCompanyesInfoAction,
  getCompanyesInfoSuccessAction,
  getCompanyesInfoFailureAction
} from '@shared/modules/feed/store/actions/get-feed.action'

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
  companyesInfo: null
}

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getFeedSuccesAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false
    })
  ),
  on(
    routerNavigatedAction,
    (): FeedStateInterface => ({
      ...initialState,
      isLoading: true
    })
  ),
  on(
    getCompanyesInfoAction,
    (state): FeedStateInterface => ({
      ...state,
      companyesInfo: null
    })
  ),
  on(
    getCompanyesInfoSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      companyesInfo: action.companyesInfo
    })
  ),
  on(
    getCompanyesInfoFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      companyesInfo: null
    })
  )
)

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action)
}
