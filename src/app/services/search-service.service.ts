import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor() { }

  private searchQuerySubject = new BehaviorSubject<string>('');

  setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }

  getSearchQuery(): BehaviorSubject<string> {
    return this.searchQuerySubject;
  }
}
