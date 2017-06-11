import { Injectable } from '@angular/core';
import {Stores} from './stores';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StoreServerService {
  private storesUrl = '../assets/stores.json';

  constructor(private http: Http) { }
  getStores(): Promise<Stores[]> {
    return this.http.get(this.storesUrl)
      .toPromise()
      .then(response => response.json() as Stores[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
  getStore(id: number): Promise<Stores> {
    return this.getStores()
      .then(stores => stores.find(store => store.id === id));
  }
}










