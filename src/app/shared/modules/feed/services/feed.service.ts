import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Injectable} from '@angular/core'

import {
  GetCompanyesInfoResponseInterface,
  GetFeedResponseInterface
} from '@shared/modules/feed/types/get-feed-response.interface'
import {environment} from '@environments/environment'

@Injectable()
export class FeedService {
  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = environment.apiUrl + url
    return this.http.get<GetFeedResponseInterface>(fullUrl)
  }

  getCompanyesInfo(): Observable<GetCompanyesInfoResponseInterface> {
    const url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo'
    return this.http.get<GetCompanyesInfoResponseInterface>(url)
  }

  constructor(private http: HttpClient) {}
}
