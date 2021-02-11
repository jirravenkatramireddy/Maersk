import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-merck-footer',
  templateUrl: './merck-footer.component.html',
  styleUrls: ['./merck-footer.component.css']
})
export class MerckFooterComponent implements OnInit {
  @Input() childMessage: string;
  source: String;
  constructor() { }

  ngOnInit() {
    this.source = sessionStorage.getItem('source');
  }

}
