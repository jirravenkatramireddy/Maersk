import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'merck-ui';
  constructor(private bnIdle: BnNgIdleService, private router: Router) { // initiate it in your component constructor
    this.bnIdle.startWatching(3600).subscribe((res) => {
      if (res) {
        this.router.navigateByUrl('');
        sessionStorage.clear();
      }
    })
  }
}
