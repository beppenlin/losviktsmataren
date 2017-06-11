import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Stores} from '../stores';
import {StoreServerService} from '../store-server.service';
import {AlldataService} from '../alldata.service';
import {AllData} from '../storedata';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  selectedStore: AllData;
  data: AllData[];
  constructor(
    private router: Router,
    private dataService: AlldataService
  ) { }

  onSelect(data: AllData): void {
    this.selectedStore = data;
  }

  getStores(): void {
    this.dataService.getData().then(stores => this.data = stores);
  }


  gotoDetail(): void {
    this.router.navigate(['/storedetail', this.selectedStore.id]);
  }
  ngOnInit() {
    this.getStores();
  }
}
