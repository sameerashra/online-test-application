import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from "./component/register/register.component";
import { ResultComponent } from "./component/result/result.component";
import { TestpageComponent } from "./component/testpage/testpage.component";
import { ReportCardComponent } from './report-card/report-card.component';

const routes: Routes = [
  {path:'', redirectTo:'/register', pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'result', component:ResultComponent},
  {path:'test', component:TestpageComponent},
  {path:'reportcard',component:ReportCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
