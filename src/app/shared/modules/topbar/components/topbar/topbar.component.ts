import {Observable} from 'rxjs'
import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'

import {CurrentUserInterface} from '@shared/types/current-user.interface'
import {currentUserSelector, isAnonymousSelector, isLoggedInSelector} from '@/auth/store/selectors'

@Component({
  selector: 'mc-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean | null>
  isAnonymous$!: Observable<boolean>
  currentUser$!: Observable<CurrentUserInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }
}
