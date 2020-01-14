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
  searchTextCount = 0;

  constructor() {
  }

  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }

  getTextCount(searchText: string) {
    this.searchTextCount = searchText.length;
  }

  inputReset(input: HTMLInputElement) {
    input.value = '';
    this.searchTextCount = 0;
  }

}
