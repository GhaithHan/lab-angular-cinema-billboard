import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { MoviesService } from './movies.service';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';

const routesArray: Routes = [
  // defines the routes in our page (URL  -> COMPONENT)
  // router.get("/",......)
  { path: "home", component: MyHomeComponentComponent },
  
  
  
  //router.get("/movie/:blahId", ...) in Express
  { path: "movie/:blahId", component: MyMovieComponentComponent  },
  

  ];




@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routesArray)
    
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
