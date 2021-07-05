import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

import {environment} from '@environments/environment'
import {PopularTagsResponseInterface} from '@shared/modules/popular-tags/types/popular-tags-response.interface'
import {PopularTagType} from '@shared/types/popular-tag.type'

@Injectable()
export class PopularTagsService {
  getTags(response: PopularTagsResponseInterface): PopularTagType {
    return response.tags
  }

  tags(): Observable<PopularTagType> {
    const url = `${environment.apiUrl}/tags`
    return this.http.get<PopularTagsResponseInterface>(url).pipe(map(this.getTags))
  }

  constructor(private http: HttpClient) {}
}
