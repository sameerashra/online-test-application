import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import answers from "../../assets/answers.json"

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent implements OnInit {
  answers = answers
  score:number
  percentage:number
  result:any
  count:number = 0;
  totalCount:number;
  name:any

  constructor(
    private http:HttpClient
  ) {
    this.http.get('http://localhost:3000/answer').subscribe((data)=>{
        this.result = data
        this.totalCount = Object.keys(this.result).length
        for (let i = 0; i < Object.keys(this.result).length; i++) {
              if(this.answers.answers[i].answer.answerKey == this.result[i+1]){
                this.count = this.count + 1;
              }
        }
    });
    this.http.get('http://localhost:3000/user').subscribe((data)=>{
      this.name = data
    })
   }
  
  ngOnInit() {
    
  }
  
  Score(count, total){
    return (count/total)*100
  } 
}
