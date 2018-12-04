import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../interface/member';
import { Observable } from 'rxjs';
import { Article } from '../interface/article';

@Injectable({
  providedIn: 'root'
})
export class RealworldService {

  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get<Member[]>('/Member');
  }

  getMemberById(id) {
    return this.http.get<Member>(`/Member/${id}`);
  }

  getArticles() {
    return this.http.get('/Article');
  }

  getArticleById(id) {
    return this.http.get(`/Article/${id}`);
  }

  getArticleByMember(id) {
    return this.http.get(`/Article?memberid=${id}`);
  }

  getTags() {
    return this.http.get('/tags');
  }

  updateMember(member: Member, id) {
    const apiUrl = `/Member/${id}`;
    return this.http.put(apiUrl, member);
  }

  createArticle(article: Article) {
    const apiUrl = `/Article`;
    return this.http.post(apiUrl, article);
  }
}
