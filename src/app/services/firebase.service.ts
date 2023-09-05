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

  deletePost(id:string){
    console.log(`${this.url}/${id}.json`)
    return this.http.delete(`${this.url}/${id}.json`)
  }
  
}

/*
{
  "rules": {
    ".read": "now < 1696024800000",  // 2023-9-30
    ".write": "now < 1696024800000",  // 2023-9-30
  }
}

*/