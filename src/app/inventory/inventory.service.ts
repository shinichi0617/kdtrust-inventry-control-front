import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Log } from 'ng2-logger/client';
import * as urljoin from 'url-join';

import { environment } from '../../environments/environment';

export class Inventory {
  id: number;
  name: string;
  description: string;
  size: string;
  type: string;
  amount: number;
  unitPrice: number;
}

@Injectable()
export class InventoryService {
  private logger = Log.create(this.constructor.name);
  private endpointUrl: string = environment.baseUrl;


  constructor(
    private http: HttpClient,
  ) {
    this.logger.d('initialized', `endpointUrl = ${this.endpointUrl}`);
  }

  /**
   * リストを得る
   */
  list(): Observable<Inventory[]> {
    const url: string = this.endpointUrl;
    let params: HttpParams = new HttpParams();
    const sql: string  = `SELECT * FROM ${environment.tableId}`;
    params = params.append('key', environment.apiKey);
    params = params.append('sql', sql);

    return this.http.get<Inventory[]>(url, { params });
  }

}