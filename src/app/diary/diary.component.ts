import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diaries:Diary[] =[ 
    new Diary('COVID-19','Worldwide pandemic 2020',new Date(2020,3,14)),
    new Diary('4/20','Not a myth a true story',new Date(2016,6,9)),
    new Diary('Practice','Pro-backend developer incoming!! ',new Date(2019,6,9)),
    new Diary('2020','This year imma let my God flex', new Date(2022,1,12)),

  ];

  toggleDetails(index){
    this.diaries[index].showDescription = !this.diaries[index].showDescription;
  }
  completeDiary(isComplete,index){
    if(isComplete){
      this.diaries.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
