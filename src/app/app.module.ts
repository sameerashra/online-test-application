import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { TestpageComponent } from './component/testpage/testpage.component';
import { ResultComponent } from './component/result/result.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ReportCardComponent } from './report-card/report-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TestpageComponent,
    ResultComponent,
    ReportCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
