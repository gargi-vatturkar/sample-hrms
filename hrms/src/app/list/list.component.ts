import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  userList = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMockData();
  }

  getMockData(page=1, userList=[]){
    this.http.get("https://reqres.in/api/users?page=" + page).subscribe(response => {
        userList = userList.concat(response["data"]);
  
        if (response["page"] < response["total_pages"])
          this.getMockData(page + 1, userList);
        else {
          for(let i=0; i<userList.length; i++){
            if(i%5 == 0) userList[i]["role"] = "Management";
            else if(i%5 == 1) userList[i]["role"] = "Developer";
            else if(i%5 == 2) userList[i]["role"] = "Testing Engineer";
            else if(i%5 == 3) userList[i]["role"] = "Financial Analyst";
            else if(i%5 == 4) userList[i]["role"] = "Production Manager";
          }

          this.userList = userList;
        }
      });
  }
}
