import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {BackendErrorMessagesComponent} from '@shared/modules/backend-error-messages/components/backend-error-messages/backend-error-messages.component'

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorMessagesComponent],
  exports: [BackendErrorMessagesComponent]
})
export class BackendErrorMessagesModule {}
