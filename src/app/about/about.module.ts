import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";

import { AboutComponent } from './about.component';

const aboutRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'about',
    component: AboutComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    aboutRouting
  ],
  declarations: [
   AboutComponent
  ]
})
export class AboutModule { }
