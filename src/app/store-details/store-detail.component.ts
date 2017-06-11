import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { AllData } from '../storedata';
import {AlldataService} from '../alldata.service';


@Component({
  selector: 'app-store-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class StoreDetailComponent implements OnInit {
  @Input() stores: AllData;
  goBack(): void {
    this.location.back();
  }
  constructor(
    private dataService: AlldataService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.dataService.getStoreByID(+params['id']))
      .subscribe(store => this.stores = store);

  }
}
