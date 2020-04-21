import { Component, OnInit } from '@angular/core';
import { ServicerProviderService } from '../service/servicer-provider.service';
import { RegisterServicer } from '../servicepro/class/register';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  page = 1;

  errorMessage: string;

  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredServicers = this.listFilter ? this.performFilter(this.listFilter) : this.servicers;
  }

  filteredServicers: RegisterServicer[];


  servicers: RegisterServicer = {
    first_name: null,
    last_name: null,
    email: null,
    mobile: null,
    city: null,
    service: null,
    password: null
  };

  performFilter(filterBy: string): RegisterServicer[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.servicers.filter((servicer : RegisterServicer) =>
      servicer.service.toLocaleLowerCase().indexOf(filterBy) !== -1
    )
  }



  constructor(private servicerService: ServicerProviderService,
              private registerService: RegisterService) { }

  ngOnInit() {
    this.servicerService.getServicers().subscribe(
      servicers => {
        this.servicers = servicers;
        this.filteredServicers = this.servicers;
      }
    )

    // this.servicerService.getServicers().subscribe(
    //   servicers => {
    //     this.servicers = servicers;
    //     // this.filteredServicers = this.servicers;
    //   },
    //   error => this.errorMessage = <any>error
    // )
  }

}
