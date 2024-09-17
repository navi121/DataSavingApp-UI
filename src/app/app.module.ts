import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { UploaddataServiceService } from './Service/uploaddata-service.service';
import { ViewDataComponent } from './view-data/view-data.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollDirective, InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent,
    ViewDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgxPrintModule,
    NgbModule,
    InfiniteScrollModule
  ],
  exports: [
    RouterModule
  ],
  providers: [UploaddataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
