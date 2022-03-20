import { ResponseModel } from './../Models/responseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../Models/book';
import { ListResponseModel } from '../Models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {
getApiurl="https://localhost:44395/api/Books/"
  constructor(private httpClient:HttpClient) { }
getAll():Observable<ListResponseModel<Book>>{
let newPath=this.getApiurl+"getall";
return this.httpClient.get<ListResponseModel<Book>>(newPath);
}
getAllByCategoryId(id:number):Observable<ListResponseModel<Book>>{
  let newpath=this.getApiurl+"getByCategoryId?id="+id;
  return this.httpClient.get<ListResponseModel<Book>>(newpath);
}
add(book:Book):Observable<ResponseModel>{
  let newPath=this.getApiurl+"add"
  return this.httpClient.post<ResponseModel>(newPath,book)
}
}
