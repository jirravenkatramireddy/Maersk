import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from '../service/services.service';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

export interface TableElement {
  containerNo: string;
  gateIn: number;
  storageDays: number;
}

const ELEMENT_DATA: TableElement[] = [
  {
    containerNo: 'MSK123456', gateIn: 456, storageDays: 6
  },
  {
    containerNo: 'MSK123456', gateIn: 456, storageDays: 6
  },
  {
    containerNo: 'MSK123456', gateIn: 456, storageDays: 6
  },
  {
    containerNo: 'MSK123456', gateIn: 456, storageDays: 6
  }




];

@Component({
  selector: 'app-anomaly-view-records',
  templateUrl: './merk-anomaly-view.component.html',
  styleUrls: ['./merk-anomaly-view.component.css']
})
export class MerkAnomalyViewComponent implements OnInit {
  eqpno; position; status; length; bundle; height; weight;
  p2p = false; reasonCode; user; anomaliesType;
  elements: any; data: any;
  public loaderProgress: boolean;
  terminalID;
  vesselCode;
  voyageNumber;
  eta;
  etd;
  row;
  numSelected = 0;
  ELEMENT_DATA = [
    // {
    //   equipment: 'MRKU7653', position: 123456, length: '40ft', height: '8ft 6in', iso: 2210, status: 'FULL', vgm: 4423, weight: 'NO', hazardous: 'NO', reefer: 'NO', reasoncode: 'aaa'
    // },
    // {
    //   equipment: 'MRKU7653', position: 826456, length: '10ft', height: '6ft 7in', iso: 2211, status: 'FULL', vgm: 4423, weight: 'NO', hazardous: 'NO', reefer: 'NO', reasoncode: 'aaa'
    // },
    // {
    //   equipment: 'MRKU7653', position: 987541, length: '30ft', height: '9ft 6in', iso: 2223, status: 'FULL', vgm: 4423, weight: 'NO', hazardous: 'NO', reefer: 'NO', reasoncode: 'aaa'
    // },
    // {
    //   equipment: 'MRKU7653', position: 345678, length: '50ft', height: '1ft 2in', iso: 2212, status: 'FULL', vgm: 4423, weight: 'NO', hazardous: 'NO', reefer: 'NO', reasoncode: 'aaa'
    // },
    // {
    //   equipment: 'MRKU7653', position: 528687, length: '40ft', height: '2ft 6in', iso: 2210, status: 'FULL', vgm: 4423, weight: 'NO', hazardous: 'NO', reefer: 'NO', reasoncode: 'aaa'
    // },
    // {
    //   equipment: 'MRKU7653', position: 705308, length: '90ft', height: '8ft 6in', iso: 2211, status: 'FULL', vgm: 4423, weight: 'NO', hazardous: 'NO', reefer: 'NO', reasoncode: 'aaa'
    // }
  ];



  displayedColumns1: string[] = ['containerNo', 'gateIn', 'storageDays'];
  dataSource1 = ELEMENT_DATA;
  displayedColumns: string[] = ['select', 'equipment', 'position', 'slotoperator', 'oog', 'iso', 'status', 'vgm', 'weight', 'hazardous', 'reefer', 'statuscode', 'reasoncode'];
  dataSource: MatTableDataSource<Element[]>;
  selection = new SelectionModel<Element[]>(true, []);
  disable: boolean;
  accepted: boolean;
  container: any;
  reason: any = "";
  vesselName;
  terminalName: any;
  count: number;


  constructor(private router: Router, private service: ServicesService) {
    this.user = sessionStorage.getItem('org');
    this.anomaliesType = sessionStorage.getItem('anomaliesType');
    this.terminalID = sessionStorage.getItem('terminalID');
    this.terminalName = sessionStorage.getItem('terminalName');
    this.vesselName = sessionStorage.getItem('vesselName');
    this.vesselCode = sessionStorage.getItem('vesselCode');
    this.voyageNumber = sessionStorage.getItem('voyageNumber');
    this.eta = sessionStorage.getItem('eta');
    this.etd = sessionStorage.getItem('etd');
    this.loaderProgress = false;
  }

  ngOnInit() {
    this.loaderProgress = true;
    this.eqpno = "MRKU8212993";
    this.position = "0010182";
    this.status = "Full";
    this.length = "20ft";
    this.bundle = "Yes";
    this.height = "8ft 6in";
    this.weight = "2400";
    this.reasonCode = "some reason";
    if (this.user == "Maersk") {
      this.p2p = false;
    }
    else {
      this.p2p = true;
    }
    this.loadData();

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  gotoDetails() {
    this.router.navigateByUrl('home/details');
  }
  onRowClicked(row) {
    if (row.terContainerId == "") {
      row.terContainerId = "-";
    }
    if (row.terStowage == "") {
      row.terStowage = "-";
    }
    if (row.terIsEmpty == "") {
      row.terIsEmpty = "-";
    }
    if (row.terSlotOperator == "") {
      row.terSlotOperator = "-";
    }
    if (row.terIsOOG == "") {
      row.terIsOOG = "-";
    }
    if (row.reasonCode == "") {
      this.reason = row.reasonCode;
      this.disable = true;
    }
    else {
      this.reason = row.reasonCode;
      this.disable = false;
    }
    if (row.statusCode === "accepted") {
      this.accepted = true;
    }
    else {
      this.accepted = false;
    }
    console.log(row, this.disable);
    this.row = row;
    console.log("row", this.row);
  }

  ApproveRejectSubmit(val, containerId) {
    this.loaderProgress = true;
    console.log("val", val);
    if (this.anomaliesType == "load") {
      this.container = "loadContainer";
    }
    else if (this.anomaliesType == "discharge") {
      this.container = "disContainer";
    }
    let bodyRequest = {
      "container": this.container,
      "terminalID": this.terminalID,
      "vesselCode": this.vesselCode,
      "etd": this.etd,
      "containerID": containerId,
      "statusCode": val
    }
    this.service.AcceptOrReject(bodyRequest).subscribe(
      result => {
        let res: any = result;
        if (res[0].status === "SUCCESS") {
          alert(res[0].status)
          this.loaderProgress = false;
          this.loadData();
        }
        else {
          alert(res[0].status)
          this.loaderProgress = false;
          this.loadData();
        }
      },
      err => {
        this.loaderProgress = false;
      });
  }
  ReasonSubmit(containerId) {
    this.loaderProgress = true;
    console.log("Reason", this.reason);
    if (this.anomaliesType == "load") {
      this.container = "loadContainer";
    }
    else if (this.anomaliesType == "discharge") {
      this.container = "disContainer";
    }
    let bodyRequest = {
      "container": this.container,
      "terminalID": this.terminalID,
      "vesselCode": this.vesselCode,
      "etd": this.etd,
      "containerID": containerId,
      "reasonCode": this.reason
    }
    this.service.ReasonCode(bodyRequest).subscribe(
      result => {
        let res: any = result;
        if (res[0].status === "SUCCESS") {
          alert(res[0].status)
          this.loaderProgress = false;
          this.loadData();
        }
        else {
          alert(res[0].status)
          this.loaderProgress = false;
          this.loadData();
        }
      },
      err => {
        this.loaderProgress = false;
      });
  }
  loadData() {
    const bodyRequest = {

      "objectType": "ANOMALIES",
      "etd": this.etd,
      "terminalId": this.terminalID,
      "vesselCode": this.vesselCode
    }
    let json_post = {
      "args": JSON.stringify(bodyRequest)
    };
    // json_post['args'].push();
    this.service.anomalies(json_post).subscribe(
      result => {
        this.data = result;
        if (this.anomaliesType == "load") {
          this.elements = this.data.totalAnomalies.loadListShipmentAnnomalies;
        }
        else if (this.anomaliesType == "discharge") {
          this.elements = this.data.totalAnomalies.dischargeListShipmentAnnomalies;
        }
        console.log(this.elements);
        if (this.elements.length) {

          this.dataSource = new MatTableDataSource(this.elements);
          //   this.parentMessage = this.elements[0].sourceFile + ", " + this.elements[0].formattedDate;
          //   sessionStorage.setItem('footermsg', this.parentMessage);
          console.log("ele", this.dataSource);
          this.loaderProgress = false;
        }
        else {
          this.loaderProgress = false;
        }
      },
      err => {
        this.loaderProgress = false;
      }
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    this.numSelected = this.selection.selected.length;

    console.log("numbers selected", this.numSelected);
    const numRows = this.dataSource.data.length;
    return this.numSelected === numRows;
  }


  /** Selects all rownumSelecteds if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Element[]): string {
    this.count++;
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.iso + 1}`;
  }

}
