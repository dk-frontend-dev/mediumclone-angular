import {StoreModule} from '@ngrx/store'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {EffectsModule} from '@ngrx/effects'

import {FeedComponent} from '@shared/modules/feed/components/feed.component'
import {GetFeedEffect} from '@shared/modules/feed/store/effects/get-feed.effect'
import {reducers} from '@shared/modules/feed/store/reducers'
import {FeedService} from '@shared/modules/feed/services/feed.service'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers)
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule {}
