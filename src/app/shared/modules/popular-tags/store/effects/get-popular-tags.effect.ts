import {catchError, map, switchMap} from 'rxjs/operators'
import {createEffect, ofType, Actions} from '@ngrx/effects'
import {Injectable} from '@angular/core'
import {of} from 'rxjs'

import {PopularTagsService} from '@shared/modules/popular-tags/services/popular-tags.service'
import {PopularTagType} from '@shared/types/popular-tag.type'
import {
  popularTagsAction,
  popularTagsFailureAction,
  popularTagsSuccesAction
} from '@shared/modules/popular-tags/store/actions/popular-tags.action'

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(popularTagsAction),
      switchMap(() => {
        return this.popularTagsService.tags().pipe(
          map((popularTags: PopularTagType) => popularTagsSuccesAction({popularTags})),
          catchError(() => of(popularTagsFailureAction()))
        )
      })
    )
  })

  constructor(private actions$: Actions, private popularTagsService: PopularTagsService) {}
}
