import {catchError, map, switchMap} from 'rxjs/operators'
import {createEffect, ofType, Actions} from '@ngrx/effects'
import {Injectable} from '@angular/core'
import {of} from 'rxjs'

import {FeedService} from '@shared/modules/feed/services/feed.service'
import {
  GetCompanyesInfoResponseInterface,
  GetFeedResponseInterface
} from '@shared/modules/feed/types/get-feed-response.interface'
import {
  getFeedAction,
  getFeedSuccesAction,
  getFeedFailureAction,
  getCompanyesInfoAction,
  getCompanyesInfoSuccessAction,
  getCompanyesInfoFailureAction
} from '@shared/modules/feed/store/actions/get-feed.action'

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({url}) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => getFeedSuccesAction({feed})),
          catchError(() => of(getFeedFailureAction()))
        )
      })
    )
  })

  getCompanyesInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCompanyesInfoAction),
      switchMap(() => {
        return this.feedService.getCompanyesInfo().pipe(
          map(
            (companyesInfo: GetCompanyesInfoResponseInterface) =>
              getCompanyesInfoSuccessAction({companyesInfo}),
            catchError(() => of(getCompanyesInfoFailureAction()))
          )
        )
      })
    )
  })

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
