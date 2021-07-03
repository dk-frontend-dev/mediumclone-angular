import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {GlobalFeedComponent} from '@/global-feed/components/global-feed.component'
import {FeedModule} from '@/shared/modules/feed/feed.module'
import {BannerModule} from '@shared/modules/banner/banner.module'

const routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
]

@NgModule({
  imports: [CommonModule, FeedModule, BannerModule, RouterModule.forChild(routes)],
  declarations: [GlobalFeedComponent]
})
export class GlobalFeedModule {}
