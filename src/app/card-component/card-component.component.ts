import { Component } from '@angular/core';
import { DataFetchService } from '../services/data-fetch.service';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {

  constructor(private dataService: DataFetchService){}

  
}
