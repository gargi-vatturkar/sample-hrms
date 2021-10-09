import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentTime;
  navigationList = ["Dashboard", "Company Info", "Employee Info",
   "Job Portal", "Attendance", "Payroll", "Benefits", "Policies", "Settings"];
  overflowed = [];

  constructor() { }

  ngOnInit(): void {
    this.currentTime = new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds() + " IST";
  }

  ngAfterViewInit(){
    this.checkNavigation();
  }


  @HostListener('window:resize')
  checkNavigation() {
    let elem = document.querySelectorAll(".navigation .nav");
    let moreElem = document.querySelectorAll(".navigation .more-cls");

    this.overflowed = [];

    if(elem[0].scrollHeight > 40){
      moreElem[0].setAttribute("style", "visibility: visible");
      for(let i =0; i< elem[0].children.length; i++){
        if(elem[0].children[i].getBoundingClientRect().top > 56){
          this.overflowed.push(elem[0].children[i].children[0]["innerText"].trim());
        }
      }
    }
    else{
      moreElem[0].setAttribute("style", "visibility: hidden");
    }
  }
}
