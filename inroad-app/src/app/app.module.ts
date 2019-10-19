import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SplashComponent } from './splash/splash.component';
import { AppRoutingModule } from './app-routing.module';

// const appRoutes: Routes = [{
//   path: 'splash',
//   component: SplashComponent
// }];

@NgModule({
  declarations: [AppComponent, HomeComponent, SplashComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
