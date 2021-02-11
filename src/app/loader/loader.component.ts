import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnChanges {
  @Input() loadertype: string;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes) {
    console.log("loadertype" + this.loadertype);
  }

}
