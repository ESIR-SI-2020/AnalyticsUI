import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article.model'

@Injectable({
  providedIn: 'root'
})
export class HttpCaller {

  constructor(private http: HttpClient) { }

  async get(url: string, api:string): Promise<any> {
    return await this.http.get<any>(api + `${url}`).toPromise();
  }

  async post(url:string, api:string, article: Article): Promise<Article> {
    return await this.http.post<Article>(api + `${url}`, article).toPromise();
  }

}
