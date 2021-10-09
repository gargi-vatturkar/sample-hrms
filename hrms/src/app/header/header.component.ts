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
    //get current IST time to display on header

    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330;   // IST offset UTC +5:30 
    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

    this.currentTime = ISTTime.getHours() + " : " + ISTTime.getMinutes() + " : " + ISTTime.getSeconds() + " IST";
  }

  ngAfterViewInit() {

    //check for screen size to show responisve "more" menu
    this.checkNavigation();
  }

  //detect screen resize
  @HostListener('window:resize')
  checkNavigation() {
    let elem = document.querySelectorAll(".navigation .nav");
    let moreElem = document.querySelectorAll(".navigation .more-cls");

    this.overflowed = [];

    //check if navi items overflowed, if yes then display responisve "more" menu
    if (elem[0].scrollHeight > 40) {

      moreElem[0].setAttribute("style", "visibility: visible");
      for (let i = 0; i < elem[0].children.length; i++) {

        //get specific nav items which have overflowed
        if (elem[0].children[i].getBoundingClientRect().top > 56) {
          this.overflowed.push(elem[0].children[i].children[0]["innerText"].trim());
        }
      }
    }
    else {
      //hide responisve "more" menu
      moreElem[0].setAttribute("style", "visibility: hidden");
    }
  }
}
