import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'

import {PaginationComponent} from '@shared/modules/pagination/components/pagination.component'
import {UtilsService} from '@shared/services/utils.service'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  providers: [UtilsService]
})
export class PaginationModule {}
