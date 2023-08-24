import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ipost {
  title: string;
  body: string;
  id: number;
}
@Injectable()
export class DataFetchService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getData(): Observable<Ipost[]> {
    return this.http.get<Ipost[]>(this.url);
  }
}
