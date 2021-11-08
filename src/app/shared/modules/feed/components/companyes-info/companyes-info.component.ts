import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {getCompanyesInfoAction} from '../../store/actions/get-feed.action'
import {companyesInfoSelector} from '../../store/selectors'
import {GetCompanyesInfoResponseInterface} from '../../types/get-feed-response.interface'

@Component({
  selector: 'app-companyes-info',
  templateUrl: './companyes-info.component.html',
  styleUrls: ['./companyes-info.component.scss']
})
export class CompanyesInfoComponent implements OnInit {
  companyesInfo$!: Observable<GetCompanyesInfoResponseInterface | null>

  fetchData(): void {
    this.store.dispatch(getCompanyesInfoAction())
  }

  initializeValues(): void {
    this.companyesInfo$ = this.store.pipe(select(companyesInfoSelector))
  }

  ngOnInit(): void {
    this.fetchData()
    this.initializeValues()
  }

  constructor(private store: Store) {}
}
