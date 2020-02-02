import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleBodyComponent } from './article-body/article-body.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ArticleListComponent, ArticleHeaderComponent, ArticleBodyComponent],
  exports: [ArticleListComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ArticleModule { }
