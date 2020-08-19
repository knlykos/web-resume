import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationModule } from './../navigation/navigation.module';
import { SharedModule } from './../shared/shared.module';
import { LandingComponent } from './landing/landing.component';
@NgModule({
  declarations: [HomePageComponent, LandingComponent],
  imports: [CommonModule, HomeRoutingModule, NavigationModule, SharedModule],
})
export class HomeModule {}
