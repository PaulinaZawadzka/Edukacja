import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MaterialsComponent } from './materials/materials.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'materials',
    component: MaterialsComponent
  },
  {
      path: 'contact',
      component: ContactComponent
  }
];


@NgModule({
  imports: [
   CommonModule,
   RouterModule.forRoot(routes) ],
exports: [RouterModule]
  ,
  declarations: []
})
export class AppRoutingModule { }
