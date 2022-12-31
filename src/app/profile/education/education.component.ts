import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private __profileService: ProfileService) { }
  eductionDetails:any = [];
  ngOnInit(): void {
    this.eductionDetails = this.__profileService.getEducation();
  }

}
