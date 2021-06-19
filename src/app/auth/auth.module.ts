import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {Routes, RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'

import {BackendErrorMessagesModule} from './../shared/modules/backend-error-messages/backend-error-messages.module'
import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {reducers} from './store/reducers'
import {AuthService} from './services/auth.service'
import {RegisterEffect} from './store/effects/register.effect'
import {LoginEffect} from './store/effects/login.effect'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {LoginComponent} from './components/login/login.component'

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
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackendErrorMessagesModule
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistanceService]
})
export class AuthModule {}
