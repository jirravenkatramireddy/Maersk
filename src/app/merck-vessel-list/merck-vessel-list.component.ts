import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../service/services.service';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';

// export interface TableElement {
//   containerNo: string;
//   fullEmpty: string;
//   ownerPartner: string;
//   weight: string;
//   transportMode: string;
//   plannedEffectiveDate:number
//   actualEffectiveDate: number;

// }


@Component({
  selector: 'app-merck-vessel-list',
  templateUrl: './merck-vessel-list.component.html',
  styleUrls: ['./merck-vessel-list.component.css']
})
export class MerckVesselListComponent implements OnInit {
  // @Input() childMessage: string;
  selected = { start: moment().subtract(30, 'days'), end: moment() };

  elements: any;
  gatedata: any;
  gateInOutdata: any;
  gatedetails = false;
  vesseldetails = true;
  parentMessage = "Source file, Date and time";
  terminal: any;
  public loaderProgress: boolean;
  private gatein: boolean = true;
  private gateout: boolean = false;

  ELEMENT_DATA = [];
  displayedColumns: string[] = ['containerNo', 'fullEmpty', 'partner', 'weight', 'transportMode', 'effectiveDate'];

  dataSource: MatTableDataSource<Element[]>;
  dropdownValue = 'Vessel Dashboard';

  vesselvalue = "Vessel Dashboard";
  gatevalue = "Gate Dashboard"

  options = [
    { name: "Vessel Dashboard", value: 1 },
    { name: "Gate Dashboard", value: 2 }
  ]

  headElements = ['Vessel/Voyage', 'Arrival Date (Estimated)', 'Departure Date (Estimated)', 'IMO Number', 'Class', 'Actions'];
  gateInCount = 0;
  gateOutCount = 0;
  changed = false;
  terminalName: any;
  vesselCount;
  constructor(private router: Router, private service: ServicesService) {
    this.loaderProgress = false;
    this.terminal = sessionStorage.getItem('terminal');
    this.terminalName = sessionStorage.getItem('terminalName');
  }

  ngOnInit() {
    this.search(false);
    // this.loaderProgress = true;
    // const dateSplitterStart = this.selected.start.format().split('T');
    // const dateSplitterEnd = this.selected.end.format().split('T');
    // const timeSplitterStart = dateSplitterStart[1].split(':');
    // const timeSplitterEnd = dateSplitterEnd[1].split(':');
    // const startDate = dateSplitterStart[0] + " " + timeSplitterStart[0] + ":" + timeSplitterStart[1];
    // const endDate = dateSplitterEnd[0] + " " + timeSplitterEnd[0] + ":" + timeSplitterEnd[1];
    // sessionStorage.setItem('footermsg', this.parentMessage);

    // const bodyRequest = {
    //   "objectType": "PRE_BAPLIE",
    //   "terminalId": "MYTPPPS",
    //   "startDate": startDate.toString(),
    //   "endDate": endDate.toString()


    // }
    // let json_post = {
    //   "args": JSON.stringify(bodyRequest)
    // };
    // // json_post['args'].push();
    // this.service.vessselList(json_post).subscribe(
    //   result => {
    //     this.elements = result;
    //     console.log(this.elements);
    //     if (this.elements.length) {
    //       this.parentMessage = this.elements[0].sourceFile + ", " + this.elements[0].formattedDate;
    //       sessionStorage.setItem('footermsg', this.parentMessage);
    //       console.log("ele", this.elements);
    //       this.loaderProgress = false;
    //     }
    //     else {
    //       this.loaderProgress = false;
    //     }
    //   },
    //   err => {
    //     this.loaderProgress = false;
    //   }
    // );


  }

  goToDetailsPage(el) {
    sessionStorage.setItem('terminal_id', el.terminalId);
    sessionStorage.setItem('vessel_code', el.vesselCode);
    sessionStorage.setItem('etd', el.etd);
    this.router.navigateByUrl('home/details');
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // search(val) {
  //   this.gatein = true;
  //   this.gateout = false;

  //   console.log("My input: ", this.dropdownValue);

  //   if (this.dropdownValue == this.vesselvalue) {
  //     this.gatedetails = false;
  //     this.vesseldetails = true;
  //     var startDate;
  //     var endDate;
  //     this.loaderProgress = true;
  //     if (val) {
  //       console.log("Entered 1");
  //       const dateSplitterStart = this.selected.start.format().split('T');
  //       const dateSplitterEnd = this.selected.end.format().split('T');
  //       const timeSplitterStart = dateSplitterStart[1].split(':');
  //       const timeSplitterEnd = dateSplitterEnd[1].split(':');
  //       startDate = dateSplitterStart[0] + " " + timeSplitterStart[0] + ":" + timeSplitterStart[1];
  //       endDate = dateSplitterEnd[0] + " " + timeSplitterEnd[0] + ":" + timeSplitterEnd[1];
  //       sessionStorage.setItem('start', startDate);
  //       sessionStorage.setItem('end', endDate);
  //     }
  //     else {
  //       if (!sessionStorage.getItem('start') && !sessionStorage.getItem('end')) {
  //         console.log("Entered 2");
  //         const dateSplitterStart = this.selected.start.format().split('T');
  //         const dateSplitterEnd = this.selected.end.format().split('T');
  //         const timeSplitterStart = dateSplitterStart[1].split(':');
  //         const timeSplitterEnd = dateSplitterEnd[1].split(':');
  //         startDate = dateSplitterStart[0] + " " + timeSplitterStart[0] + ":" + timeSplitterStart[1];
  //         endDate = dateSplitterEnd[0] + " " + timeSplitterEnd[0] + ":" + timeSplitterEnd[1];
  //         sessionStorage.setItem('start', startDate);
  //         sessionStorage.setItem('end', endDate);
  //       }
  //       else {
  //         console.log("Entered 3");
  //         startDate = sessionStorage.getItem('start');
  //         endDate = sessionStorage.getItem('end');
  //         this.selected = {
  //           start: moment(startDate, 'YYYY-MM-DD hh:mm'),
  //           end: moment(endDate, 'YYYY-MM-DD hh:mm')
  //         };

  //       }
  //     }
  //     sessionStorage.setItem('footermsg', this.parentMessage);

  //     const bodyRequest = {
  //       "objectType": "PRE_BAPLIE",
  //       "terminalId": this.terminal,
  //       "startDate": startDate.toString(),
  //       "endDate": endDate.toString()


  //     }
  //     let json_post = {
  //       "args": JSON.stringify(bodyRequest)
  //     };
  //     // json_post['args'].push();
  //     this.service.vessselList(json_post).subscribe(
  //       result => {
  //         this.elements = result;
  //         console.log(this.elements);
  //         if (this.elements.length) {
  //           this.parentMessage = this.elements[0].sourceFile + ", " + this.elements[0].formattedDate;
  //           this.vesselCount=this.elements.length;
  //           sessionStorage.setItem('footermsg', this.parentMessage);
  //           console.log("ele", this.elements);
  //           this.loaderProgress = false;
  //         }
  //         else {
  //           this.loaderProgress = false;
  //         }
  //       },
  //       err => {
  //         this.loaderProgress = false;
  //       }
  //     );

  //   }
    
  //   else
  //     if (this.dropdownValue == this.gatevalue)
  //  {
  //       this.gatedetails = true;
  //       this.vesseldetails = false;
  //       console.log("gate");
  //       this.loaderProgress = true;
  //       const dateSplitterStart = this.selected.start.format().split('T');
  //       const dateSplitterEnd = this.selected.end.format().split('T');
  //       const timeSplitterStart = dateSplitterStart[1].split(':');
  //       const timeSplitterEnd = dateSplitterEnd[1].split(':');
  //       const startDate = dateSplitterStart[0] + " " + timeSplitterStart[0] + ":" + timeSplitterStart[1];
  //       const endDate = dateSplitterEnd[0] + " " + timeSplitterEnd[0] + ":" + timeSplitterEnd[1];
  //       const bodyRequest = {
  //         "objectType": "GATE_IN_OUT",
  //         "startDate": startDate.toString(),
  //         "endDate": endDate.toString()


  //       }
  //       let json_post = {
  //         "args": JSON.stringify(bodyRequest)
  //       };
  //       this.service.gateIngateOut(json_post).subscribe(
  //         result => {
  //           this.gateInOutdata = result;
  //           console.log(this.gateInOutdata);
  //           this.gateInCount = this.gateInOutdata.filter(data => data.gateInOutFlag === "Y").length;
  //           this.gateOutCount = this.gateInOutdata.filter(data => data.gateInOutFlag === "N").length;
  //           this.dataSource = new MatTableDataSource(this.gateInOutdata.filter(data => data.gateInOutFlag === "Y"));
  //           this.loaderProgress = false;

  //         },
  //         err => {
  //           this.loaderProgress = false;
  //         }
  //       );


  //       // this.gotoGateInPage();
  //     }
  // }


  search(val) {
    // this.gatein = true;
    // this.gateout = false;

    // console.log("My input: ", this.dropdownValue);

    // if (this.dropdownValue == this.vesselvalue) {
      // this.gatedetails = false;
      // this.vesseldetails = true;
      var startDate;
      var endDate;
      this.loaderProgress = true;
      if (val) {
        console.log("Entered 1");
        const dateSplitterStart = this.selected.start.format().split('T');
        const dateSplitterEnd = this.selected.end.format().split('T');
        const timeSplitterStart = dateSplitterStart[1].split(':');
        const timeSplitterEnd = dateSplitterEnd[1].split(':');
        startDate = dateSplitterStart[0] + " " + timeSplitterStart[0] + ":" + timeSplitterStart[1];
        endDate = dateSplitterEnd[0] + " " + timeSplitterEnd[0] + ":" + timeSplitterEnd[1];
        sessionStorage.setItem('start', startDate);
        sessionStorage.setItem('end', endDate);
      }
      else {
        if (!sessionStorage.getItem('start') && !sessionStorage.getItem('end')) {
          console.log("Entered 2");
          const dateSplitterStart = this.selected.start.format().split('T');
          const dateSplitterEnd = this.selected.end.format().split('T');
          const timeSplitterStart = dateSplitterStart[1].split(':');
          const timeSplitterEnd = dateSplitterEnd[1].split(':');
          startDate = dateSplitterStart[0] + " " + timeSplitterStart[0] + ":" + timeSplitterStart[1];
          endDate = dateSplitterEnd[0] + " " + timeSplitterEnd[0] + ":" + timeSplitterEnd[1];
          sessionStorage.setItem('start', startDate);
          sessionStorage.setItem('end', endDate);
        }
        else {
          console.log("Entered 3");
          startDate = sessionStorage.getItem('start');
          endDate = sessionStorage.getItem('end');
          this.selected = {
            start: moment(startDate, 'YYYY-MM-DD hh:mm'),
            end: moment(endDate, 'YYYY-MM-DD hh:mm')
          };

        }
      }
      sessionStorage.setItem('footermsg', this.parentMessage);

      const bodyRequest = {
        "objectType": "PRE_BAPLIE",
        "terminalId": this.terminal,
        "startDate": startDate.toString(),
        "endDate": endDate.toString()


      }
      const bodyRequest1 = {
        "objectType": "GATE_IN_OUT",
        "startDate": startDate.toString(),
        "endDate": endDate.toString()


      }
      let json_post = {
        "args": JSON.stringify(bodyRequest)
      };
      let json_post1 = {
        "args": JSON.stringify(bodyRequest1)
      };
      // json_post['args'].push();
      this.service.vessselList(json_post).subscribe(
        result => {
          this.elements = result;
          console.log(this.elements);
          this.vesselCount=this.elements.length;
          this.service.gateIngateOut(json_post1).subscribe(
            result => {
              this.gateInOutdata = result;
              console.log(this.gateInOutdata);
              this.gateInCount = this.gateInOutdata.filter(data => data.gateInOutFlag === "Y").length;
              this.gateOutCount = this.gateInOutdata.filter(data => data.gateInOutFlag === "N").length;
              // this.dataSource = new MatTableDataSource(this.gateInOutdata.filter(data => data.gateInOutFlag === "Y"));
              this.loaderProgress = false;
  
            },
            err => {
              this.loaderProgress = false;
            }
          );
          if (this.elements.length) {
            this.parentMessage = this.elements[0].sourceFile + ", " + this.elements[0].formattedDate;
            sessionStorage.setItem('footermsg', this.parentMessage);
            console.log("ele", this.elements);
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
    
  //   else if (this.dropdownValue == this.gatevalue)
  //  {
  //       this.gatedetails = true;
  //       this.vesseldetails = false;
  //       console.log("gate");
  //       this.loaderProgress = true;
  //       const dateSplitterStart = this.selected.start.format().split('T');
  //       const dateSplitterEnd = this.selected.end.format().split('T');
  //       const timeSplitterStart = dateSplitterStart[1].split(':');
  //       const timeSplitterEnd = dateSplitterEnd[1].split(':');
  //       const startDate = dateSplitterStart[0] + " " + timeSplitterStart[0] + ":" + timeSplitterStart[1];
  //       const endDate = dateSplitterEnd[0] + " " + timeSplitterEnd[0] + ":" + timeSplitterEnd[1];
  //       const bodyRequest = {
  //         "objectType": "GATE_IN_OUT",
  //         "startDate": startDate.toString(),
  //         "endDate": endDate.toString()


  //       }
  //       let json_post = {
  //         "args": JSON.stringify(bodyRequest)
  //       };
  //       this.service.gateIngateOut(json_post).subscribe(
  //         result => {
  //           this.gateInOutdata = result;
  //           console.log(this.gateInOutdata);
  //           this.gateInCount = this.gateInOutdata.filter(data => data.gateInOutFlag === "Y").length;
  //           this.gateOutCount = this.gateInOutdata.filter(data => data.gateInOutFlag === "N").length;
  //           this.dataSource = new MatTableDataSource(this.gateInOutdata.filter(data => data.gateInOutFlag === "Y"));
  //           this.loaderProgress = false;

  //         },
  //         err => {
  //           this.loaderProgress = false;
  //         }
  //       );


  //       // this.gotoGateInPage();
      // }
  // }


  gotoGateInPage() {

    this.gatein = true;
    this.gateout = false;
    this.dataSource = new MatTableDataSource(this.gateInOutdata.filter(data => data.gateInOutFlag === "Y"));
    
  }

  gotoGateOutPage() {
    this.gatein = false;
    this.gateout = true;
    this.dataSource = new MatTableDataSource(this.gateInOutdata.filter(data => data.gateInOutFlag === "N"));
    

  }
  gotoDashboard() {
    location.reload();
  }


}
