import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/db.service';
import { Router } from '@angular/router'
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private dbService:DbService,
    private router:Router,
    private http:HttpClient
  ) { }

  ngOnInit() {
  }
  data:any
  save(formData){
    this.http.post('http://localhost:3000/user', formData).subscribe((val)=>{
      this.router.navigate(['/test'])
    })
  }
}
