import { Category } from './../Models/category';
import { ListResponseModel } from './../Models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44395/api/Categories/";
  getAll():Observable<ListResponseModel<Category>>{
let newPath=this.apiUrl+"getall";
return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
}
