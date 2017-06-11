import { Injectable } from '@angular/core';
import {Berry} from './produce';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class BerryService {
  private berryUrl = '../assets/Berries.json';
  constructor(private http: Http) {
}
  getBerries(): Promise<Berry[]> {
    return this.http.get(this.berryUrl)
      .toPromise()
      .then(response => response.json() as Berry[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
  getBerry(id: number): Promise<Berry> {
    return this.getBerries()
      .then(berries => berries.find(berry => berry.id === id));
  }
}
