import { Component, OnInit } from '@angular/core';
import {AlldataService} from '../alldata.service';
import {AllData} from '../storedata';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: AllData[] = [];
  data2: AllData;

  constructor(
    private dataService: AlldataService,
    private route: ActivatedRoute,
    private location: Location
  ) { };
      ngOnInit() {
    this.dataService.getData().then(data => this.data = data);
      }
  }


