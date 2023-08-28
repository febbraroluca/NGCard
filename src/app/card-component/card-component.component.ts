import { Component, OnInit } from '@angular/core';
import { DataFetchService, IPost } from '../services/data-fetch.service';
import { of, concat, delay } from 'rxjs';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})

export class CardComponentComponent implements OnInit{

  posts: IPost[] = [];

  constructor(private dataService: DataFetchService){}

  ngOnInit(): void {
    
    this.dataService.getData().subscribe(data => {
      const first = data.slice(0, 10);
      const second = data.slice(10, 20);
      const third = data.slice(20, 30);

      const delayedPosts = concat(
        of(first).pipe(delay(2000)),
        of(second).pipe(delay(2000)),
        of(third).pipe(delay(2000))
      );

      delayedPosts.subscribe(delayedData => {
        this.posts = this.posts.concat(delayedData);
      });
    });
  }

}
