import { Component, OnInit } from '@angular/core';
import question from '../../../assets/questions.json'
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import answers from "../../../assets/answers.json";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  question = question.questions
  answers = answers.answers
  result:any
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/answer').subscribe((data)=>{
      this.result = data
    })    
  }

}
