import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
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
  sendMobile(mobile) {
    console.log(mobile);
    this.selectedMobile = mobile;
    }

  ngOnInit() {
  }

}
