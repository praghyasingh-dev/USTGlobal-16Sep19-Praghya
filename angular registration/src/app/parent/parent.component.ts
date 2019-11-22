import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  






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
]

selectedMobile;
Mobiles = [ {
  imgUrl : 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324__340.jpg',
  name : 'i-phone'
},
{
  imgUrl : 'https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723__340.jpg',
  name : 'SAMSUNG'
},
{
  imgUrl : 'https://cdn.pixabay.com/photo/2015/01/01/23/55/telephone-586266__340.jpg',
  name : 'Moto'
},
{
  imgUrl : 'https://cdn.pixabay.com/photo/2016/11/29/12/30/android-1869510__340.jpg',
  name : 'MI'
}
]





  constructor() { }

  ngOnInit() {
  }
  

  sendMobile(mobile) {
  console.log(mobile);
  this.selectedMobile = mobile;
  }

}
