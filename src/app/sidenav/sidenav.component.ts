import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  menuItem:any = []
  constructor() { }

  ngOnInit(): void {
    this.getMenuItem()
  }
  getMenuItem() {
    this.menuItem = [
      {icon:"home", label:"Home", link:"/home", isDisplay:true},
      {icon:"info", label:"About", link:"/about", isDisplay:true},
      {icon:"history_edu", label:"Education", link:"/education", isDisplay:true},
      {icon:"work_history", label:"Experience", link:"/experience", isDisplay:true},
      {icon:"list", label:"Projects",link:"/projects", isDisplay:true},
      {icon:"engineering", label:"Skills",link:"/skills", isDisplay:true},
      {icon:"note", label:"Reccomendations",link:"/reccomendations", isDisplay:false},
      {icon:"note", label:"Blog",link:"/blog", isDisplay:false}
    ]
  }

}
