import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/core/service/demo/demo.service';
import { Router } from '@angular/router';


export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(
    private router: Router,
    private demoService: DemoService
  ) {

  }

  ngOnInit() {
  }

  submit() {
    this.demoService.login(this.username, this.password).subscribe(
      data => {
        alert(data.response)
        this.router.navigate(['/index']);
      }, error => {
        console.log(error)
        alert(error.error.message)
      })
  }
}
