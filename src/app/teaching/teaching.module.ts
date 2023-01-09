import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeachingComponent} from './teaching.component';
import {LessonComponent} from './lesson/lesson.component';
import {TeachingRoutingModule} from './teaching.routing';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [TeachingComponent, LessonComponent],
  imports: [
    CommonModule, TeachingRoutingModule, MaterialModule, FormsModule
  ]
})

export class DashboardteacherModule {
}
