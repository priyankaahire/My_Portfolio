import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutInfo:any;
  basicInformation:any = [];
  aboutTag: string = '';
  constructor(private __profileService: ProfileService) { }

  ngOnInit(): void {
    this.aboutInfo = this.__profileService.about;
    this.basicInformation = this.__profileService.getBasicInformation();
    this.basicInformation = this.basicInformation[0];
    this.aboutTag = this.__profileService.aboutTag;
  }

}
