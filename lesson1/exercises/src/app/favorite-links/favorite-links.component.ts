import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite-links',
  templateUrl: './favorite-links.component.html',
  styleUrls: ['./favorite-links.component.css']
})
export class FavoriteLinksComponent implements OnInit {
  favLinks = ['https://google.com', 'https://reddit.com']
  constructor() { }

  ngOnInit() {
  }

}
