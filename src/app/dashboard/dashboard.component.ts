import { Component, OnInit } from '@angular/core';
import { ServicerProviderService } from '../service/servicer-provider.service';
import { RegisterServicer } from '../servicepro/class/register';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  page = 1;

  errorMessage: string;

  // _listFilter: string;

  // get listFilter(): string {
  //   return this._listFilter;
  // }

  // set listFilter(value: string){
  //   this._listFilter = value;
  //   this.filteredServicers = this.listFilter ? this.performFilter(this.listFilter) : this.servicers;
  // }

  // filteredServicers: RegisterServicer[];

  servicers: RegisterServicer;

  // performFilter(filterBy: string): RegisterServicer[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.servicers.filter((servicer : RegisterServicer) =>
  //     servicer.service.toLocaleLowerCase().indexOf(filterBy) !== -1
  //   )
  // }


  constructor(private servicerService: ServicerProviderService) { }

  ngOnInit() {
    this.servicerService.getServicers().subscribe(data =>{
      if(data){
        console.log('no error')
      }
    }

    )
    // this.servicerService.getServicers().subscribe(
    //   servicers => {
    //     // this.servicers = servicers;
    //     this.filteredServicers = this.servicers;
    //   },
    //   error => this.errorMessage = <any>error
    // )
  }

}
