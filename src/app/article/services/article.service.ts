import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import {Article} from '../models/article';


export interface Response {
  findAllArticles: Article[];
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public articles: Article[];

  constructor(private apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:8080/graphql' }),
      cache: new InMemoryCache()
    });
  }

  public getAllArticles = () => {
    this.apollo.query({
      query: gql`query findAllArticles{
        findAllArticles{
          id,
          url,
          owner,
          sharedBy,
          tags,
          suggestedTags
        }
      }`
    }).subscribe(result => {
      const response: Response = result.data as Response;
      this.articles = response.findAllArticles as Article[];
    });
  }
}
