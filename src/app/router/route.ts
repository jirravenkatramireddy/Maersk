import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerckLoginComponent } from '../merck-login/merck-login.component';
import { MerckHomeComponent } from '../merck-common-components/merck-home/merck-home.component';
import { MerkFlowdiagramComponent } from '../merk-flowdiagram/merk-flowdiagram.component';
import { MerkAnomalyViewComponent } from '../merk-anomaly-view/merk-anomaly-view.component';
import { MerckGateDataCardsComponent } from '../merck-gate-data-cards/merck-gate-data-cards.component';
import { MerckVesselListComponent } from '../merck-vessel-list/merck-vessel-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: MerckHomeComponent,
    children: [
      // {
      //   path: 'consignment',
      //   component: MerckConsignmentComponent
      // },
      {
        path: 'vessels',
        component: MerckVesselListComponent
      },
      {
        path: 'details',
        component: MerkFlowdiagramComponent
      },
      {
        path: 'anomalies',
        component: MerkAnomalyViewComponent
      },
      {
        path: 'gatecards',
        component: MerckGateDataCardsComponent
      }
    ]
  },
  {
    path: '',
    component: MerckLoginComponent
  },
];



@NgModule({

  imports: [RouterModule.forRoot(routes, { useHash: false })],

  exports: [RouterModule]

})

export class AppRoutingModule { }
