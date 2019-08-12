import { Component, OnInit } from '@angular/core';
import question from '../../../assets/questions.json'
import { DbService } from 'src/app/db.service.js';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
  question = question.questions
  user:any
  constructor(
    private dbService:DbService,
    private http:HttpClient,
    private router:Router
  ) { }
  ngOnInit() {
    this.http.get('http://localhost:3000/user').subscribe((data)=>{
      this.user = data
    })
  }
  save(data){
    this.http.post('http://localhost:3000/answer', data).subscribe(()=>{
      this.router.navigate(['/reportcard'])
    })
  }
}
