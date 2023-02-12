import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post, Profile} from "../../shared/django-models";
import {ApiService} from "../../services/api.service";
import {UserDataService} from "../../services/user-data.service";
import {CreateDataService} from "../../services/create-data.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public ownProfile: Profile[] = [];
  edittedId: number = 0;


  firstFormGroup = new FormGroup({
    bio: new FormControl('', Validators.required),
  });
  secondFormGroup = new FormGroup({
    location: new FormControl('', Validators.required),
  });
  thirdFormGroup = new FormGroup({
    birth_date: new FormControl('', Validators.required),
  });

  constructor(private dataService: UserDataService, private createDataService: CreateDataService) { }

  ngOnInit() {
    this.dataService.getProfile().then(res => {
      this.ownProfile = res;
    });
  }

  selectProfile(profile: Profile) {
    this.edittedId = profile.id;
  }

  editProfile(profile: Profile) {
    this.createDataService.updateProfile(profile).then( res => {
      this.edittedId = 0;
    });
  }


}
