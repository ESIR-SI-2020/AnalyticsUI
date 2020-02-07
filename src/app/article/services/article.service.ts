import { Injectable } from '@angular/core';

import { HttpCaller } from '../../utils/http-caller';
import { environment} from '../../../environments/environment';
import { Article } from '../../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpCaller) { }

  getArticle(id: string): any{
    return this.http.get('/articles/' + id, this.apiUrl)
  }

  getArticles(): any {
    return this.http.get('/articles', this.apiUrl)
  }

  postArticle(article: Article) : any {
    return this.http.post('/articles' , this.apiUrl, article)
  }
}
