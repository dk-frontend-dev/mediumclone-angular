import {createReducer, on, Action} from '@ngrx/store'

import {FeedStateInterface} from '@shared/modules/feed/types/feed-state.interface'
import {
  getFeedAction,
  getFeedSuccesAction,
  getFeedFailureAction
} from '@shared/modules/feed/store/actions/get-feed.action'

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null
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
  )
)

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action)
}
