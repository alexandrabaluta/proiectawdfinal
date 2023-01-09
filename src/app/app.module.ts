import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material/material.module';
import {AppRoutingModule} from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { InfopageComponent } from './infopage/infopage.component';
import { TeachingComponent } from './teaching/teaching.component';
import { ContactComponent } from './contact/contact.component';
import { LessonComponent } from './teaching/lesson/lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfopageComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
