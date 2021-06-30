import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {GlobalFeedComponent} from '@/global-feed/components/global-feed.component'
import {FeedModule} from '@/shared/modules/feed/feed.module'

const routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
]

@NgModule({
  imports: [CommonModule, FeedModule, RouterModule.forChild(routes)],
  declarations: [GlobalFeedComponent]
})
export class GlobalFeedModule {}
