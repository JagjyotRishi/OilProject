import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.scss']
})
export class LevelOneComponent implements OnInit {
  employees:Array<any> = [
    {firstName: "Jagjyot", lastName: "Singh", emailId: "jagjyot2008@gmail.com"}
  ];
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.commonService.getData().subscribe((data) => {
      console.log(data);
      this.employees = data.employees;
    }, (error) => {
      console.log("error data", error);
    });
  }

}
