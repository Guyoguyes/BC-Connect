import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { RegisterServicer } from '../servicepro/class/register';
import { ServicerProviderService } from '../service/servicer-provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-profile',
  templateUrl: './info-profile.component.html',
  styleUrls: ['./info-profile.component.css']
})
export class InfoProfileComponent implements OnInit {

  servicer: RegisterServicer;
  errorMessage = '';

  constructor(private servicerServicer: ServicerProviderService, private route: ActivatedRoute) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getServiceWorker(id);
    }
  }

  getServiceWorker(id: number) {
    this.servicerServicer.getEachServicer(id).subscribe({
      next: servicer => this.servicer = servicer,
      error: err => this.errorMessage = err
    });
  }

}
