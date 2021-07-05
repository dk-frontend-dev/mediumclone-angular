import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '@shared/modules/popular-tags/store/action-types'
import {PopularTagType} from '@shared/types/popular-tag.type'

export const popularTagsAction = createAction(ActionTypes.POPULAR_TAGS)

export const popularTagsFailureAction = createAction(ActionTypes.POPULAR_TAGS_FAILURE)

export const popularTagsSuccesAction = createAction(
  ActionTypes.POPULAR_TAGS_SUCCES,
  props<{popularTags: PopularTagType}>()
)
