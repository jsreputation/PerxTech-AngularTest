import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, debounceTime, map, Subject, takeUntil } from 'rxjs';
import { BookService } from '../../core/services/book.service';
import { Book } from '../../core/models/book';

@Component({
  selector: 'app-bookcase',
  templateUrl: './bookcase.component.html',
  styleUrls: ['./bookcase.component.scss'],
})
export class BookcaseComponent implements OnInit, OnDestroy {
  data$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  searchForm: FormGroup = this.fb.group({
    keyword: '',
  });

  private unsubscribeAll: Subject<any> = new Subject();

  constructor(private bookService: BookService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.search();
    this.searchForm
      .get('keyword')
      ?.valueChanges.pipe(takeUntil(this.unsubscribeAll), debounceTime(300))
      .subscribe((keyword) => {
        this.search();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  private search() {
    this.bookService
      .getBooks()
      .pipe(
        map((res) => {
          const keyword = this.searchForm.get('keyword')?.value || '';
          if (keyword) {
            return res.data.filter((x) => Boolean(x.attributes.content.includes(keyword)));
          } else {
            return res.data;
          }
        })
      )
      .subscribe((res) => {
        this.data$.next(res);
      });
  }
}
