import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-merck-terminalactivity',
  templateUrl: './merck-terminalactivity.component.html',
  styleUrls: ['./merck-terminalactivity.component.css'],
  // providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]
})
export class MerckTerminalactivityComponent implements OnInit {
  
 public dischargeAnamaliesCount;
 public loadAnamoliescount;
  constructor() { 
   
  }

  ngOnInit() {
    
    this.dischargeAnamaliesCount=20;
    this.loadAnamoliescount=200
  }
  
  gotoAnomaliespage(){
    if(this.dischargeAnamaliesCount==0){
    console.log("none")
    alert("hi")
    } else 
    console.log("Anomalies")
  }
  
}
// export class getProgressbarConfig(): ProgressbarConfig {
//   config.max =500;

// }
