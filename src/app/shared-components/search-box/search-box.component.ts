import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private searchService: SearchServiceService
  ) {
    this.searchForm = this.fb.group({
      searchQuery: [''],
    });

    this.searchForm.controls['searchQuery'].valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((query: string) => {
        this.searchService.setSearchQuery(query);
      });
  }
}
