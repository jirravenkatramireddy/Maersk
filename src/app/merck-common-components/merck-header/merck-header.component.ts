import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merck-header',
  templateUrl: './merck-header.component.html',
  styleUrls: ['./merck-header.component.css']
})
export class MerckHeaderComponent implements OnInit {
  public user;
  constructor(private router: Router) {
    this.user = sessionStorage.getItem('user');
  }

  ngOnInit() {
  }
  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }

}
