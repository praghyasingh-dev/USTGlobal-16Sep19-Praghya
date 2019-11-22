import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { BikeComponent } from './bike/bike.component';
import { MovieComponent } from './movie/movie.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { CarchildComponent } from './carchild/carchild.component';
import { MoviechildComponent } from './moviechild/moviechild.component';
import { LaptopchildComponent } from './laptopchild/laptopchild.component';
import { BikechildComponent } from './bikechild/bikechild.component';
import { MobilechildComponent } from './mobilechild/mobilechild.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent,
    CarComponent,
    BikeComponent,
    MovieComponent,
    LaptopComponent,
    MobileComponent,
    CarchildComponent,
    MoviechildComponent,
    LaptopchildComponent,
    BikechildComponent,
    MobilechildComponent
  ],
  imports: [
    BrowserModule,
  RouterModule.forRoot([
    {path : 'car', component: CarComponent},
    {path : 'bike', component: BikeComponent},
    {path : 'movie', component: MovieComponent},
    {path : 'laptop', component: LaptopComponent},
    {path : 'mobile', component: MobileComponent}
  ]),
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
