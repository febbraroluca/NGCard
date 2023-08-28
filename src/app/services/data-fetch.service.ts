import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/post.interface';

@Injectable()
export class DataFetchService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getData(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url);
  }
}
export { IPost };
