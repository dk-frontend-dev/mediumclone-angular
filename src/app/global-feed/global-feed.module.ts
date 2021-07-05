import {RouterModule, Routes} from '@angular/router'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {GlobalFeedComponent} from '@/global-feed/components/global-feed/global-feed.component'
import {FeedModule} from '@shared/modules/feed/feed.module'
import {BannerModule} from '@shared/modules/banner/banner.module'
import {PopularTagsModule} from '@shared/modules/popular-tags/popular-tags.module'
import {FeedTogglerModule} from '@shared/modules/feed-toggler/feed-toggler.module'

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GlobalFeedComponent]
})
export class GlobalFeedModule {}
