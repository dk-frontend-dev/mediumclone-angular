import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {AuthService} from '../../services/auth.service'
import {registerAction} from './../../store/actions/register.action'
import {isSubmittingSelector, validationErrorsSelector} from './../../store/selectors'
import {BackendErrorsInterface} from 'src/app/shared/types/backend-errors.interface'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup
  isSubmitting$!: Observable<boolean>
  backendErrors$!: Observable<BackendErrorsInterface | any>

  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService) {}

  ngOnInit(): void {
    this.initializeFrom()
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  initializeFrom(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    this.store.dispatch(registerAction({request: this.form.value}))
  }
}
