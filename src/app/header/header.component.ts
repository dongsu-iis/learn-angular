import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'demo1';
  url = 'http://blog.miniasp.com/';
  imgUrl = '/assets/images/logo.png';

  constructor() { }

  ngOnInit() {
  }

  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }

}
