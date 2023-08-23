import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../services/data-fetch.service';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit{

  posts: any[] = [];

  constructor(private dataService: DataFetchService){}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.posts = data.filter((post) => post.id <= 16);
    });
  }

}
