import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service';
import {PrimeIcons} from 'primeng/api';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  workexp: any = [];
  events1:any = [];
  constructor(private __profileService: ProfileService) { }

  ngOnInit(): void {
       this.workexp = this.__profileService.getExprience();
  }
}
