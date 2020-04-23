import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diaries:Diary[] =[ 
    new Diary('COVID-19','Worldwide pandemic 2020'),
    new Diary('4/20','Not a myth a true story'),
    new Diary('Practice','Pro-backend developer incoming!! '),
    new Diary('2020','This year imma let my God flex'),

  ];

  toggleDetails(index){
    this.diaries[index].showDescription = !this.diaries[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
