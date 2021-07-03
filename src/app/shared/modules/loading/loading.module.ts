import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {LoadingComponent} from '@shared/modules/loading/components/loading.component'

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent]
})
export class LoadingModule {}
