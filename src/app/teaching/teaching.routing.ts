import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeachingComponent} from './teaching.component';
import {LessonComponent} from './lesson/lesson.component';

const routes: Routes = [
  {path: '', component: TeachingComponent},
  {path: 'lesson', component: LessonComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachingRoutingModule {

}
