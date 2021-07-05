import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {ErrorMessageComponent} from '@/shared/modules/error-message/components/error-message/error-message.component'

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorMessageComponent],
  exports: [ErrorMessageComponent]
})
export class ErrorMessageModule {}
