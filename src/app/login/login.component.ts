import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  public passVisibility = false;

  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#181818';
 }

  public togglePassVisibility(): void {
    this.passVisibility = !this.passVisibility;
  }

  public onSubmit(loginForm: NgForm): void {
    const phone = loginForm.value.tel;
    const pass = loginForm.value.pass;
    if (phone && pass && loginForm.valid) {
      this.router.navigate(['/account']);
    }
  }

}
