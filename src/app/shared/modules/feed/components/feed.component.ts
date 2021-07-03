import {Component, Input, OnInit} from '@angular/core'
import {Store, select} from '@ngrx/store'
import {Observable} from 'rxjs'

import {getFeedAction} from '@shared/modules/feed/store/actions/get-feed.action'
import {GetFeedResponseInterface} from '@shared/modules/feed/types/get-feed-response.interface'
import {
  feedSelector,
  isErrorSelector,
  isLoadingSelector
} from '@shared/modules/feed/store/selectors'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps!: string
  isLoading$!: Observable<boolean>
  error$!: Observable<string | null>
  feed$!: Observable<GetFeedResponseInterface | null>

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(isErrorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  constructor(private store: Store) {}
}
