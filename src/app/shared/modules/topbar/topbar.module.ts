import {RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {TopbarComponent} from '@shared/modules/topbar/components/topbar/topbar.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TopbarComponent],
  exports: [TopbarComponent]
})
export class TopbarModule {}
