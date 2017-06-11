import { Injectable } from '@angular/core';
import { AllData } from './storedata';
import {Http} from '@angular/http';

@Injectable()
export class AlldataService {

  private dataUrl = '../assets/storedata.json';
  constructor(private http: Http) {
  }
  getData(): Promise<AllData[]> {
    return this.http.get(this.dataUrl)
      .toPromise()
      .then(response => response.json() as AllData[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  getStoreByID(id: number): Promise<AllData> {
    return this.getData()
      .then(stores => stores.find(store => store.id === id));
  }
  getStores(city: string): Promise<AllData> {
    return this.getData()
      .then(stores => stores.find(store => store.store_city === city));
  }

}
