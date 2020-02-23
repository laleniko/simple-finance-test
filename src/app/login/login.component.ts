import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public passVisibility = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public togglePassVisibility() {
    this.passVisibility = !this.passVisibility;
  }

  public onSubmit(loginForm: NgForm) {
    const phone = loginForm.value.tel;
    const pass = loginForm.value.pass;
    if (phone && pass && loginForm.valid) {
      this.router.navigate(['/account']);
    }
  }

}
