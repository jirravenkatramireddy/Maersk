import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './router/route';
import { AppComponent } from './app.component';
import { MerckLoginComponent } from './merck-login/merck-login.component';
import { MerckHeaderComponent } from './merck-common-components/merck-header/merck-header.component';
import { MerckSubheader1Component } from './merck-common-components/merck-subheader1/merck-subheader1.component';
import { MerckHomeComponent } from './merck-common-components/merck-home/merck-home.component';
import { MerckTerminalactivityComponent } from './merck-common-components/merck-terminalactivity/merck-terminalactivity.component';

import { MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MerkFlowdiagramComponent } from './merk-flowdiagram/merk-flowdiagram.component';
import { MerkAnomalyViewComponent } from './merk-anomaly-view/merk-anomaly-view.component';
import { MerckGateDataCardsComponent } from './merck-gate-data-cards/merck-gate-data-cards.component';
import { MerckVesselListComponent } from './merck-vessel-list/merck-vessel-list.component';
import { MerckFooterComponent } from './merck-common-components/merck-footer/merck-footer.component';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { HttpClientModule } from '@angular/common/http';


import { ServicesService } from './service/services.service';
import { LoaderComponent } from './loader/loader.component';
import { BnNgIdleService } from 'bn-ng-idle';





@NgModule({
  declarations: [
    AppComponent,
    MerckLoginComponent,
    MerckHeaderComponent,
    MerckHomeComponent,
    MerkFlowdiagramComponent,
    MerkAnomalyViewComponent,
    MerckGateDataCardsComponent,
    MerckSubheader1Component,
    MerckVesselListComponent,
    MerckTerminalactivityComponent,
    MerckFooterComponent,
    LoaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    MatCheckboxModule,

    NgxDaterangepickerMd.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServicesService,
    BnNgIdleService,
    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
