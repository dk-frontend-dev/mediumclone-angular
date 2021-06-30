import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {Routes, RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'

import {reducers} from '@/auth/store/reducers'
import {AuthService} from '@/auth/services/auth.service'
import {LoginEffect} from '@/auth/store/effects/login.effect'
import {RegisterEffect} from '@/auth/store/effects/register.effect'
import {LoginComponent} from '@/auth/components/login/login.component'
import {RegisterComponent} from '@/auth/components/register/register.component'
import {GetCurrentUserEffect} from '@/auth/store/effects/get-current-user.effect'
import {PersistanceService} from '@shared/services/persistance.service'
import {BackendErrorMessagesModule} from '@shared/modules/backend-error-messages/backend-error-messages.module'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
    BackendErrorMessagesModule
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistanceService]
})
export class AuthModule {}
