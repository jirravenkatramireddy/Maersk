import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../service/services.service';


@Component({
  selector: 'app-merck-login',
  templateUrl: './merck-login.component.html',
  styleUrls: ['./merck-login.component.css']
})
export class MerckLoginComponent implements OnInit {
  constructor(private router: Router, private service: ServicesService) { }

  ngOnInit() {
  }
  private validationResult = false;
  message: any;
  login(terminal, username, password) {
    sessionStorage.setItem('user', username);
    let terminalId = terminal.split("-");
    sessionStorage.setItem('terminal', terminalId[0]);
    sessionStorage.setItem('terminalName', terminalId[1]);
    console.log("terminal,un, pass", terminal, username, password)
    let bodyRequest = {
      "username": username,
      "password": password,
      "org": username

    }
    this.service.login(bodyRequest).subscribe(
      result => {
        let res: any = result;
        if (res.statuscode === 200) {
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('org', res.org);
          this.router.navigateByUrl('home/vessels');
        }
        else {
          this.validationResult = true;
          this.message = res.message;

        }
      });


  }

}
