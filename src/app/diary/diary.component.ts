import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';
@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diaries:Diary[] =[ 
    {title:'COVID-19',description:'Worldwide pandemic 2020'},
    {title:'420',description:'Not a myth a true story'},
    {title:'Practice',description:'Pro backend developer incoming!! '},
    {title:'2020',description:'This year imma let my God flex'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
