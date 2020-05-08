import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnDestroy, OnChanges {


  @Input()
  item;

  orig_item;

  @Output()
  delete = new EventEmitter<any>();

  @Output()
  titleChanged = new EventEmitter<any>();

  isEdit = false;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.item) {
      this.orig_item = changes.item.currentValue;
      this.item = Object.assign({}, changes.item.currentValue);
    }
  }

  ngOnDestroy(): void {
  }

  deleteArticle() {
    this.delete.emit(this.item);
  }

  doCancel() {
    this.item = Object.assign({}, this.orig_item);
    this.isEdit = false;
  }

  doEdit() {
    this.titleChanged.emit(this.item);
  }

}
