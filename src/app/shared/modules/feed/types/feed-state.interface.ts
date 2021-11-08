import {
  GetCompanyesInfoResponseInterface,
  GetFeedResponseInterface
} from '@shared/modules/feed/types/get-feed-response.interface'

export interface FeedStateInterface {
  isLoading: boolean
  error: string | null
  data: GetFeedResponseInterface | null
  companyesInfo: GetCompanyesInfoResponseInterface | null
}
