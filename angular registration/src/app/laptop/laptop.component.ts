import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  selectedLaptop;
Laptop = [ {
  imgUrl : 'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241__340.jpg',
  name : 'hp'
},
{
  imgUrl : 'https://cdn.pixabay.com/photo/2016/11/29/11/52/coder-1869306__340.jpg',
  name : 'SAMSUNG'
},
{
  imgUrl : 'https://cdn.pixabay.com/photo/2016/11/21/15/46/computer-1846056__340.jpg',
  name : 'Apple'
},
{
  imgUrl : 'https://cdn.pixabay.com/photo/2013/07/12/18/58/laptop-154091__340.png',
  name : 'ASUS'
}
];
  constructor() { }
  sendLaptop(laptop) {
    console.log(laptop);
    this.selectedLaptop = laptop;
    }

  ngOnInit() {
  }

}
