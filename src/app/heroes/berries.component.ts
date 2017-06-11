import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {AlldataService} from '../alldata.service';
import {AllData} from '../storedata';
import {FilterPipe} from '../filter.pipe';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class BerriesComponent implements OnInit {
  data: AllData[] = [];
  constructor(
    private dataService: AlldataService,
    private location: Location,
    private filterpipe: FilterPipe
  ) { }
  getData() {
    this.dataService.getData().then(data => this.data = data);
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
  this.getData();
  }


}
