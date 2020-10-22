import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContainerRoutingModule } from './app-container-routing.module';
import { AppListModule } from '../shared/app-list/app-list.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppContainerRoutingModule,
    AppListModule
  ]
})
export class AppContainerModule { }
