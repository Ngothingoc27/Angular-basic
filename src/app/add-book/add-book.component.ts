import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import {  Router  } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: any = {
    id: 0,
    title: "",
    price: 0,
    des: '',
    author: ''
  }

  constructor(
    private bookService: BookService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  onAddBook(){
    this.bookService.addBook(this.book).subscribe(data => {
      this.router.navigateByUrl('');
    })
  }

}
