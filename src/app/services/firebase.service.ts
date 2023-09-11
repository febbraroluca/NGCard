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
      'https://ng-card-new-default-rtdb.europe-west1.firebasedatabase.app/post';
  }

  insertPost(body: {}) {
    return this.http.post(`${this.url}.json`, body);
  }

  getPost(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url + '.json');
  }

  getPostById(id:string){
    console.log('getting post by id: ', id)
    return this.http.get(`${this.url}/${id}.json`);
  }

  deletePost(id:string){
    console.log(`${this.url}/${id}.json`)
    return this.http.delete(`${this.url}/${id}.json`)
  }

  updatePost(post: any, postId: string): Observable<any> {
    const url = `${this.url}/${postId}.json`;
    return this.http.patch(url, post);
  }
  
}

export { IPost };