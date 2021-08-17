import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: any[] = [];
  validFrom = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }
  getBooks() {
    this.bookService.getBooks().subscribe(item => {
      this.books = item;
    })
  }

  onHandleRemoveBook(id: number) {
    this.bookService.removeBook(id).subscribe(item => {
      this.books = this.books.filter(book => book.id != item.id);
    })
  }

}
