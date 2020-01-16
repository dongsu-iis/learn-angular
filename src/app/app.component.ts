import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  url = 'http://blog.miniasp.com/';
  imgUrl = '/assets/images/logo.png';
  keyword = '';

  constructor() {
  }

  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }

  inputReset() {
    this.keyword = '';
  }

}
