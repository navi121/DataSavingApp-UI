import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { UploaddataServiceService } from './Service/uploaddata-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgxPrintModule
  ],
  exports: [
    RouterModule
  ],
  providers: [UploaddataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
