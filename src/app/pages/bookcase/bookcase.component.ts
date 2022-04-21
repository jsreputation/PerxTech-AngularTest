import { Component, OnInit } from '@angular/core';
import { BookService } from '../../core/services/book.service';

@Component({
  selector: 'app-bookcase',
  templateUrl: './bookcase.component.html',
  styleUrls: ['./bookcase.component.scss']
})
export class BookcaseComponent implements OnInit {

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(res => {
      console.log(res);
    });
  }

}
