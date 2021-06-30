import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {EffectsModule} from '@ngrx/effects'

import {AppRoutingModule} from '@/app-routing.module'
import {AppComponent} from '@/app.component'
import {AuthModule} from '@/auth/auth.module'
import {GlobalFeedModule} from '@/global-feed/global-feed.module'
import {TopbarModule} from '@shared/modules/topbar/topbar.module'
import {PersistanceService} from '@shared/services/persistance.service'
import {AuthInterseptorService} from '@shared/services/auth-interseptor.service'
import {environment} from '@environments/environment.prod'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    GlobalFeedModule,
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production
    }),
    HttpClientModule,
    EffectsModule.forRoot([]),
    TopbarModule
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterseptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
