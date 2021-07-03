import {StoreModule} from '@ngrx/store'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {EffectsModule} from '@ngrx/effects'
import {RouterModule} from '@angular/router'

import {FeedComponent} from '@shared/modules/feed/components/feed.component'
import {GetFeedEffect} from '@shared/modules/feed/store/effects/get-feed.effect'
import {reducers} from '@shared/modules/feed/store/reducers'
import {FeedService} from '@shared/modules/feed/services/feed.service'
import {ErrorMessageModule} from '@shared/modules/error-message/error-message.module'
import {LoadingModule} from '@shared/modules/loading/loading.module'
import {PaginationModule} from '@shared/modules/pagination/pagination.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers)
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule {}
