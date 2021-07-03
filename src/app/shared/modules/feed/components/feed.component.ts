import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {Store, select} from '@ngrx/store'
import {Observable, Subscription} from 'rxjs'
import {ActivatedRoute, Params, Router} from '@angular/router'

import {environment} from '@environments/environment'
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
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps!: string
  isLoading$!: Observable<boolean>
  error$!: Observable<string | null>
  feed$!: Observable<GetFeedResponseInterface | null>
  baseUrl!: string
  queryParamsSubscription!: Subscription
  currentPage!: number
  limit: number = environment.limit

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(isErrorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params.page || '1')
    })
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}
}
