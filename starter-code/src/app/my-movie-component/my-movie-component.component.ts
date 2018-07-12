import { Component, OnInit } from '@angular/core';
import { MoviesService, Movies } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {


movieId: any;
movieItem: Movies;

  constructor(
    private myActivatedRouteServ: ActivatedRoute,
    public myMovieServ: MoviesService,
    private myRouterServ: Router
  ) { }

  ngOnInit() {
    this.myActivatedRouteServ.paramMap
    // ".subscribe()" is kind of like ".then()"
    .subscribe((myParams) => {
      // "blahId" comes from the route's PATH
      // { path: "contact/:blahId", ... }
      this.movieId = myParams.get("blahId");

      // search the array for the movie with the right ID
      this.movieItem = this.myMovieServ.getMovie(this.movieId);
});
  }

}
