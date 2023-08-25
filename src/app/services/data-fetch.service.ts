import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipost } from '../interfaces/post.interface';

@Injectable()
export class DataFetchService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getData(): Observable<Ipost[]> {
    return this.http.get<Ipost[]>(this.url);
  }
}
export { Ipost };

