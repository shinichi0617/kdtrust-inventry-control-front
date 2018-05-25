import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InventoryService } from './inventory/inventory.service';
import { InventoryListPageComponent } from './inventory/inventory-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryListPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // third party modules
    // app modules
    AppRoutingModule,
  ],
  providers: [
    InventoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
