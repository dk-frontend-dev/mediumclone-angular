import {ProfileInterface} from '@shared/types/profile.interface'

export interface ArticleInterface {
  author: ProfileInterface
  body: string
  title: string
  createdAt: string
  updatedAt: string
  description: string
  favorited: boolean
  favoritesCount: boolean
  slug: string
  tagList: string[]
}
