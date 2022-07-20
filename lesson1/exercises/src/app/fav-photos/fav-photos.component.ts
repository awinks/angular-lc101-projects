import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://th.bing.com/th/id/R.157e0892ace4c8c7f0a68c4f06f3b139?rik=4bugykdNjNCYcw&pid=ImgRaw&r=0';
  image2 = 'https://i.pinimg.com/736x/12/36/e8/1236e8b80f1a6f301b984ff1d7bb5403--cheeseburgers-hamburgers.jpg';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}