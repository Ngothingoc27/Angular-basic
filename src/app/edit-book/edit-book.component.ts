import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book: any = {
    id: 0,
    title: "",
    price: 0,
    des: '',
    author: ''
  }

  constructor(
    private productServices: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.activatedRoute.params.subscribe(params => {
      this.productServices.get(params.id).subscribe(data => {
        this.book = data;
      });
    });
  }
  onUpdateProduct() {
    this.productServices.updateBook(this.book).subscribe(data => {
      this.router.navigateByUrl('');
    });
  }

}
