import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  API : string = 'https://61107c53c848c900171b3b2e.mockapi.io/api/products'

  constructor(private http : HttpClient) { }
  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  get(id: number): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }

  removeBook(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`);
  }

  addBook(item: any): Observable<any> {
    return this.http.post<any>(this.API, item);
  }

  updateBook(item: any): Observable<any> {
    return this.http.put<any>(`${this.API}/${item.id}`, item);
  }

  
}
