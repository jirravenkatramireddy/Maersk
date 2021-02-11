import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ServicesService } from '../service/services.service';


@Component({
  selector: 'app-merk-flowdiagram',
  templateUrl: './merk-flowdiagram.component.html',
  styleUrls: ['./merk-flowdiagram.component.css']
})
export class MerkFlowdiagramComponent implements OnInit {
  // terminal_id;vessel_code;etd;
  elements: any; parentMessage = "Source file, Date and time";
  public discanamoliescount;
  public loadanamoliescount;
  public loaderProgress: boolean;
  cursor: boolean;
  public terminal_id;
  public vessel_code;
  public etd;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: ServicesService) {
    this.loaderProgress = false;
    this.cursor = true;
    this.terminal_id = sessionStorage.getItem('terminal_id');
    this.vessel_code = sessionStorage.getItem('vessel_code');
    this.etd = sessionStorage.getItem('etd');

  }

  ngOnInit() {
    // this.parentMessage = sessionStorage.getItem('footermsg');
    this.loaderProgress = true;
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.loaderProgress = true;
    //  this.terminal_id = params['terminal_id'];
    //   this.vessel_code = params['vessel_code'];
    //   this.etd= params['etd'];
    const bodyRequest = {
      "objectType": "ANOMALIES",
      "terminalId": this.terminal_id,
      "vesselCode": this.vessel_code,
      "etd": this.etd
    }
    let json_post = {
      "args": JSON.stringify(bodyRequest)
    };
    // json_post['args'].push();
    this.loaderProgress = true;
    this.service.vessselDetails(json_post).subscribe(
      result => {

        console.log("aaa")
        this.elements = result[0];
        if (this.elements) {
          // this.loaderProgress = false;
        }
        else {
          this.loaderProgress = false;
          alert("Actual Departure Baplie is not available. Please try after some time.")
          this.router.navigateByUrl('home/vessels');
        }
        sessionStorage.setItem('terminalID', this.elements.terminalID);
        sessionStorage.setItem('terminalName', this.elements.terminalName);
        sessionStorage.setItem('vesselName', this.elements.vesselName);
        sessionStorage.setItem('vesselCode', this.elements.vesselCode);
        sessionStorage.setItem('voyageNumber', this.elements.voyageNumber);
        sessionStorage.setItem('eta', this.elements.eta);
        sessionStorage.setItem('etd', this.elements.etd);
        this.parentMessage = this.elements.sourceFile1 + (this.elements.sourceFile1 !== "" ? ", " : "") + this.elements.sourceFile2 + (this.elements.sourceFile2 !== "" ? ", " : "") + this.elements.formattedDate;
        console.log("ele", this.elements);
        this.loaderProgress = false;


      },
      err => {
        this.loaderProgress = false;
      });

    // });
  }
  gotoDischargeAnomaliespage() {
    if (this.elements.discanamoliescount == 0) {
      console.log("none")
      // this.cursor = false;
    } else {
      sessionStorage.setItem('anomaliesType', 'discharge');
      this.router.navigateByUrl('home/anomalies');
      // this.cursor = true;
    }
  }
  gotoLoadAnomaliespage() {
    if (this.elements.loadanamoliescount == 0) {
      console.log("none")
      // this.cursor = false;
    } else {
      sessionStorage.setItem('anomaliesType', 'load');
      this.router.navigateByUrl('home/anomalies');
      // this.cursor = true;
    }

  }

  gotoDashboard() {
    console.log("hiiiiii")
    this.router.navigateByUrl('home/vessels');
  }

}
