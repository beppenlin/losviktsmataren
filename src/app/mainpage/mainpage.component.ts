import {Component, Input, OnInit} from '@angular/core';
import {AlldataService} from '../alldata.service';
import {ActivatedRoute, Params} from '@angular/router';
import {AllData} from '../storedata';
import {FilterPipe} from '../filter.pipe';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  @Input() stores: AllData;
  datdata: AllData[];
  city: any;
  constructor(
    private dataService: AlldataService,
    private route: ActivatedRoute,
  ) { }
  getData() {
    return this.dataService.getData().then(data => this.datdata = data);
  };
  ngOnInit() {
    this.getData();
    this.city = {store_city: 'Umeå'};
  }

}
