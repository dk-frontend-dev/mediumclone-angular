import {PopularTagType} from '@shared/types/popular-tag.type'

export interface PopularTagsStateInterface {
  isLoading: boolean
  error: boolean
  tags: PopularTagType[] | null
}
