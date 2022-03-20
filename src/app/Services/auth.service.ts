import { SingleResponseModel } from '../Models/singleResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../Models/loginModel';
import { TokenModel } from '../Models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
   getAPiUrl="https://localhost:44395/api/Auth"

login(loginModel:LoginModel){
  let newPath=this.getAPiUrl+"/login"
return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel)
}
isAuthenticated(){
  if(localStorage.getItem("token")){
    return true;
  }
  else{
    return false;
  }
}
}
