import {ArticleInterface} from '@shared/types/article.interface'

export interface GetFeedResponseInterface {
  articles: ArticleInterface[]
  articlesCount: number | undefined
}

export interface GetCompanyesInfoResponseInterface {
  [key: string]: string
}
