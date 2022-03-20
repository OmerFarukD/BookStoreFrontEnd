import { CategoryService } from './../../Services/category.service';
import { Category } from './../../Models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categories:Category[]=[];
currentCategory:Category;
dataLoaded:boolean=false;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getAll()
  }
getAll(){
this.categoryService.getAll().subscribe(response=>{
  this.categories=response.data
})
}
setCurrentCategory(category:Category){
  this.currentCategory=category;
  }
  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
    return "list-group active";
    }
    return "list-group";
    }
    getAllCategoryClass(){
      if(!this.currentCategory){
        return "list-group-item active";
      }
      else{
        return "list-group-item";
      }
    }
}
