import { Component, OnInit } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {SignupService} from "../../services/signup.service";

import {Router} from "@angular/router";



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  firstFormGroup = new FormGroup({
    username: new FormControl('')
  });

  secondFormGroup = new FormGroup({
    password: new FormControl('')
  });

  thirdFormGroup = new FormGroup({
    email: new FormControl('')
  });


  constructor(private _formBuilder: FormBuilder, private router: Router, private service: SignupService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      username: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.thirdFormGroup = this._formBuilder.group({
      password: ['', Validators.required]
    });
  }

  signup() {
    this.service.signup(this.firstFormGroup.value['username'], this.secondFormGroup.value['email'], this.thirdFormGroup.value['password']).then(res => {localStorage.setItem('token', res.token);
      this.router.navigate(['home'])
  })
}}
