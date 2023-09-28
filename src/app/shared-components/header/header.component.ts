import { Component } from '@angular/core';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private searchService: SearchServiceService) {}
}
