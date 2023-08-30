import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from './data-fetch.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private url;

  constructor(private http: HttpClient) {
    this.url =
      'https://ng-card-b3cba-default-rtdb.europe-west1.firebasedatabase.app/post.json';
  }

  insertPost(body: {}) {
    return this.http.post(this.url, body);
  }

  getPost(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url);
  }
}
