import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

  selectedBike;
Bikes  = [ {
  imgUrl : 'https://cdn.pixabay.com/photo/2013/03/11/12/44/bmw-92442__340.jpg',
  name : 'BMW'
},
{
  imgUrl : 'https://cdn.pixabay.com/photo/2019/04/08/21/46/harley-davidson-4113065__340.jpg',
  name : 'Harley Davidson'
},
{
  imgUrl : 'https://cdn.pixabay.com/photo/2018/02/24/22/57/engine-3179427__340.png',
  name : 'R15'
},
{
  imgUrl : 'https://cdn.pixabay.com/photo/2015/07/11/16/36/triumph-rocket-840995__340.jpg',
  name : 'Triumph Rocket'
}
];

  constructor() { }
  sendBike(bike) {
    console.log(bike);
    this.selectedBike = bike;
    }

  ngOnInit() {
  }

}
