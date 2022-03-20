import { ToastrService } from 'ngx-toastr';
import { BookService } from './../../Services/book.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
bookAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private bookService:BookService,private toastrService:ToastrService) { }

  ngOnInit(): void {
  this.createBookForm();
  }
createBookForm(){
this.bookAddForm=this.formBuilder.group({
categoryId:["",Validators.required],
bookName:["",Validators.required],
unitPrice:["",Validators.required],
unitsInStock:["",Validators.required]
})
}
add(){
  
if (this.bookAddForm.valid) {
  let bookModel=Object.assign({},this.bookAddForm.value) 
  this.bookService.add(bookModel).subscribe(response=>{
    this.toastrService.success("Kitap eklendi","Başarılı")
  },errorResponse=>{
    if (errorResponse.error.Errors.length>0) {
      console.log(errorResponse.error.Errors) 
      for (let i = 0; i < errorResponse.error.Errors.length; i++) {
      this.toastrService.error(errorResponse.error.Errors[i],"Doğrulama hataları.")
        
      }
     
    }
  })
 
}else{
this.toastrService.error("Formunuz eksik","Dikkat!")
 }
}
}
