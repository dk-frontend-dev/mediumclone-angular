import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {RouterModule, Routes} from '@angular/router'
import {GlobalFeedComponent} from '@/global-feed/components/global-feed.component'

import {PopularTagsService} from '@shared/modules/popular-tags/services/popular-tags.service'
import {PopularTagsComponent} from '@shared/modules/popular-tags/components/popular-tags.component'
import {reducers} from '@shared/modules/popular-tags/store/reducers'
import {GetPopularTagsEffect} from '@shared/modules/popular-tags/store/effects/get-popular-tags.effect'
import {LoadingModule} from '@shared/modules/loading/loading.module'

const routes: Routes = [
  {
    path: 'tag',
    component: GlobalFeedComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    LoadingModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot({}),
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect])
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService]
})
export class PopularTagsModule {}
