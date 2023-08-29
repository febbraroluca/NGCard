import { Component, OnInit } from '@angular/core';
import { DataFetchService, IPost } from '../../services/data-fetch.service';
import { map, noop, switchMap, tap, timer } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.css'],
})
export class PostListComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private dataService: DataFetchService) {}

  ngOnInit(): void {
    const firstGroup$ = timer(1000).pipe(
      switchMap(() =>
        this.dataService.getData().pipe(
          map((data) => {
            const filteredData = data.filter((dataelem) => dataelem.id <= 10);

            return filteredData;
          })
        )
      )
    );

    const secondGroup$ = timer(2000).pipe(
      switchMap(() =>
        this.dataService
          .getData()
          .pipe(
            map((data) =>
              data.filter((dataelem) => dataelem.id > 10 && dataelem.id <= 20)
            )
          )
      )
    );

    const thirdGroup$ = timer(3000).pipe(
      switchMap(() =>
        this.dataService
          .getData()
          .pipe(
            map((data) =>
              data.filter((dataelem) => dataelem.id > 20 && dataelem.id <= 30)
            )
          )
      )
    );

    firstGroup$
      .pipe(
        tap((firstGroup) => (this.posts = firstGroup)),
        switchMap(() =>
          secondGroup$.pipe(
            tap(
              (secondGroup) => (this.posts = [...this.posts, ...secondGroup])
            ),
            switchMap(() =>
              thirdGroup$.pipe(
                tap(
                  (thirdGroup) => (this.posts = [...this.posts, ...thirdGroup])
                )
              )
            )
          )
        )
      )
      .subscribe(noop);
  }
}