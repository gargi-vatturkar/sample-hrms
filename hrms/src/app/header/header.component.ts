import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentTime;

  constructor() { }

  ngOnInit(): void {
    this.currentTime = new Date().getHours() + " : " +  new Date().getMinutes() + " : " + new Date().getSeconds() + " IST";
  }

}
