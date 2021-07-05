import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {RouterModule} from '@angular/router'

import {PopularTagsService} from '@shared/modules/popular-tags/services/popular-tags.service'
import {PopularTagsComponent} from '@shared/modules/popular-tags/components/popular-tags.component'
import {reducers} from '@shared/modules/popular-tags/store/reducers'
import {GetPopularTagsEffect} from '@shared/modules/popular-tags/store/effects/get-popular-tags.effect'
import {LoadingModule} from '@shared/modules/loading/loading.module'
import {ErrorMessageModule} from '@shared/modules/error-message/error-message.module'

@NgModule({
  imports: [
    CommonModule,
    LoadingModule,
    ErrorMessageModule,
    RouterModule.forChild([]),
    StoreModule.forRoot({}),
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect])
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService]
})
export class PopularTagsModule {}
