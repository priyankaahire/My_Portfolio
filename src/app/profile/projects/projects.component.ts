import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectDetails: any = [];
  totalRecord: number = 10;
  constructor(private __projectService: ProfileService) { }

  ngOnInit(): void {
    this.projectDetails = this.__projectService.getProjects();
    this.totalRecord = this.projectDetails.length;
  }
  handelBtnClick(url:string) {
   window.open(url, '_blank');
  }
  disabledBtn(url:string) {
   return url && url != "" ? false : true;
  }
  paginate(event:any) {
    event.first     = 1;
    event.rows      = 2;
    event.page      = event.rows + 1;
    event.pageCount = 10;
  }
}
