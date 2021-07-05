import {createReducer, on, Action} from '@ngrx/store'

import {PopularTagsStateInterface} from '@shared/modules/popular-tags/store/types/popular-tags-state.interface'
import {
  popularTagsAction,
  popularTagsFailureAction,
  popularTagsSuccesAction
} from '@shared/modules/popular-tags/store/actions/popular-tags.action'

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  error: false,
  tags: null
}

const popularTagsReducer = createReducer(
  initialState,
  on(
    popularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
      error: false
    })
  ),
  on(
    popularTagsFailureAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      error: true
    })
  ),
  on(
    popularTagsSuccesAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      error: false,
      tags: action.popularTags
    })
  )
)

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action)
}
