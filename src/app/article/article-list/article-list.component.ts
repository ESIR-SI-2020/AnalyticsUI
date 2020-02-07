import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {ArticleService} from '../services/article.service';
import { Article } from '../../models/article.model'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles;
  validateForm: FormGroup;
  newArticle : Article = {
    url:'',
    owner:'',
    tags: []
  };

  constructor(private articleService: ArticleService, private fb: FormBuilder) { }

  ngOnInit() {
    this.articleService.getArticles().then(data => this.articles = data);
    this.validateForm = this.fb.group({
      url: [null, [Validators.required]],
      owner: [null, [Validators.required]],
      tag: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.newArticle.url = this.validateForm.get('url').value;
    this.newArticle.owner = this.validateForm.get('owner').value;
    this.newArticle.tags.push(this.validateForm.get('owner').value);
    this.articleService.postArticle(this.newArticle).then(data => this.articles.push(data));
    this.newArticle.tags = [];
  }

}
