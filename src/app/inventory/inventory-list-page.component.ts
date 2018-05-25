import { Component, OnInit } from '@angular/core';

import { Log } from 'ng2-logger/client';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

import { InventoryService, Inventory } from './inventory.service';

@Component({
  templateUrl: './inventory-list-page.component.html',
  styleUrls: ['./inventory-list-page.component.scss']
})
export class InventoryListPageComponent implements OnInit {

  private logger = Log.create(this.constructor.name);

  inventories: Inventory[];

  constructor(
    private inventoryService: InventoryService,
  ) {
   }

  ngOnInit() {

    // リスト取得
    this.inventoryService.list()
      .map((inventories: Inventory[]) => {
        this.inventories = inventories;
      })
      .subscribe(
        () => {},
        (error: any) => {},
        () => {
        }
      );
  }

}
