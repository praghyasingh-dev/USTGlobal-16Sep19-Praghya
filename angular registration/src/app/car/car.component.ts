import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  selectedCar;
  Cars = [ {
    imgUrl : 'https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg',
    name : 'BMW'
  },
  {
    imgUrl : 'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg',
    name : 'AUDI'
  },{
    imgUrl : 'https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467__340.jpg',
    name : 'Ferari'
  },
  {
    imgUrl : 'https://cdn.pixabay.com/photo/2013/08/11/03/40/corvette-171422__340.jpg',
    name : 'Corvette'
  }
]



  constructor() { }

  sendCar(car) {
    console.log(car);
    this.selectedCar = car;
    }
  


  ngOnInit() {
  }
  

}
