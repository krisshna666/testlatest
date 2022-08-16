import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  createForm() {
    this.loginForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }
  submitted(val: any) {
    alert(JSON.stringify(val));
    localStorage.setItem('cred', JSON.stringify(val));
    this.router.navigate(['/userlist']);
  }
  ngOnInit(): void {}
}
