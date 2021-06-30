import {Observable} from 'rxjs'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Component, OnInit} from '@angular/core'
import {Store, select} from '@ngrx/store'

import {isSubmittingSelector, validationErrorsSelector} from '@/auth/store/selectors'
import {loginAction} from '@/auth/store/actions/login.action'
import {BackendErrorsInterface} from '@shared/types/backend-errors.interface'

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup
  isSubmitting$!: Observable<boolean>
  backendErrors$!: Observable<BackendErrorsInterface | any>

  ngOnInit(): void {
    this.initializeFrom()
    this.initializeValues()
  }

  initializeFrom(): void {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(): void {
    this.store.dispatch(loginAction({request: this.form.value}))
  }

  constructor(private fb: FormBuilder, private store: Store) {}
}
