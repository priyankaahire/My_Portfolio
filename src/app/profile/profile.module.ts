import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { MatDividerModule } from '@angular/material/divider';
import { SplitPipe } from '../shared/pipe/split';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import {ProgressBarModule } from 'primeng/progressbar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDividerModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    PaginatorModule,
    ProgressBarModule
  ],
  declarations: [
    ProfileComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    SplitPipe
   
    
  ],
 
})
export class ProfileModule { }