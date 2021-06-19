import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {HttpClientModule} from '@angular/common/http'
import {EffectsModule} from '@ngrx/effects'

import {environment} from './../environments/environment.prod'
import {AppRoutingModule} from 'src/app/app-routing.module'
import {AppComponent} from 'src/app/app.component'
import {AuthModule} from 'src/app/auth/auth.module'
import {TopbarModule} from './shared/modules/topbar/topbar.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production
    }),
    HttpClientModule,
    EffectsModule.forRoot([]),
    TopbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
