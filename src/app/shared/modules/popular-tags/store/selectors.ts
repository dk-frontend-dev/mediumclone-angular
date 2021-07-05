import {createFeatureSelector, createSelector} from '@ngrx/store'

import {PopularTagsStateInterface} from '@shared/modules/popular-tags/store/types/popular-tags-state.interface'

export const authFeatureSelector = createFeatureSelector<PopularTagsStateInterface>('popularTags')

export const popularTagsSelector = createSelector(
  authFeatureSelector,
  (popularTags: PopularTagsStateInterface) => popularTags.tags
)

export const isLoadingSelector = createSelector(
  authFeatureSelector,
  (popularTags: PopularTagsStateInterface) => popularTags.isLoading
)

export const errorSelector = createSelector(
  authFeatureSelector,
  (popularTags: PopularTagsStateInterface) => popularTags.error
)
