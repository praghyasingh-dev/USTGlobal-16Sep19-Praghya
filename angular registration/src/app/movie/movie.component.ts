import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  selectedMovie;
 Movies = [ {
  imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwSVTzmVp0unX3xjNlUcMwcc9qDE94gWJj_X-7NAMXi6WfC_x8',
  name : 'Avengers'
},
{
  imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSWITv2y8pKuii9vqOVtw8gJ7boCIMZsz5uuG4K8TYKdwrhgmMw',
  name : 'Spiderman'
},
{
  imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebwNw44n7PeZ7YsgQHdERr0hwQo2Izjsu_KAswdYksdDMxnlK',
  name : 'WAR'
},
{
  imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtUCIsH28rT6jR1pGYm8Hawt5_tB9nshViLAGI_LIkewSYyGy',
  name : 'DreamGirl'
}
]

  constructor() { }
  sendMovie(movie) {
    console.log(movie);
    this.selectedMovie = movie;
    }

  ngOnInit() {
  }

}
