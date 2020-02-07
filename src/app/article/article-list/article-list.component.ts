import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';
import {Article} from '../models/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public articles: Article[] = [];
  private articleService: ArticleService;

  constructor(private service: ArticleService) {
    this.articleService = service;
  }

  ngOnInit() {
    this.articleService.getAllArticles();
    this.articles = this.articleService.articles || []; // Just to avoid a warning in chrome
    this.articles.sort((a: Article, b: Article) => a.id > b.id ? 1 : -1);
  }

}
