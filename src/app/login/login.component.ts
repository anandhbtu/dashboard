import { Component, OnInit } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  godasboard() {
    this.router.navigate(['admin']);
  }
  goregister() {
    this.router.navigate(['register']);
  }
  goforget() {
    this.router.navigate(['forget']);
  }
}
