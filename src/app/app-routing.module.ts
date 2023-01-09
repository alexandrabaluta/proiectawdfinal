import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {InfopageComponent} from './infopage/infopage.component';
import {TeachingComponent} from './teaching/teaching.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'infopage',
    component: InfopageComponent,
  },
  {
    path: 'teaching',
    loadChildren: () =>
      import('./teaching/teaching.module').then((m) => m.DashboardteacherModule),
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {
}

