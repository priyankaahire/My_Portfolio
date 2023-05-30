import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: any
  maxValue: number = 100;
  constructor(private __skillsService: ProfileService) { }

  ngOnInit(): void {
    this.skills = this.__skillsService.getSkills();
    console.log(this.skills)
  }
  addClassNameForSkills(name: string, number: number) {
    number = Number(number);
    return this.__skillsService.getScoreColor(number, "pf-progressbar")
  }

}
