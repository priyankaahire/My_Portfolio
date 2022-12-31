import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  resumeUrl:any;
  constructor(private __profileSevice: ProfileService) { }

  ngOnInit(): void {
    this.resumeUrl = this.__profileSevice.resumeurl
  }

}
