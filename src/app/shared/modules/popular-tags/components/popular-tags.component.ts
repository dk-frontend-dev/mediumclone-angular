import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable, Subscription} from 'rxjs'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {parseUrl} from 'query-string'

import {popularTagsAction} from '@shared/modules/popular-tags/store/actions/popular-tags.action'
import {PopularTagType} from '@shared/types/popular-tag.type'
import {
  popularTagsSelector,
  isLoadingSelector,
  errorSelector
} from '@shared/modules/popular-tags/store/selectors'

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {
  popularTags$!: Observable<PopularTagType | null>
  isLoading$!: Observable<boolean>
  error$!: Observable<boolean>
  page$!: number
  queryParamsSubscription!: Subscription

  initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    const parsedUrl = parseUrl(this.router.url)
    this.page$ = Number(parsedUrl.query.page) ?? 1
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.page$ = Number(params.page || 1)
    })
  }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.store.dispatch(popularTagsAction())
  }

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {}
}
