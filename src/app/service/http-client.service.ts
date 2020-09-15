import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User{
  constructor(
    public codice:number,
    public user:string,
    public password:string,
    public nome:string,
    public cognome:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient
    ) { 
       }
  
       getUsers()
    {
      console.log("test call");
      return this.httpClient.get<User[]>('http://localhost:8087/lista');
    }

    public deleteUser(user) {
      return this.httpClient.delete<User>("http://localhost:8087/lista"+"/"+ user.codice);
    }
  
    public createUser(user) {
      return this.httpClient.post<User>("http://localhost:8087/addUser", user);
    }

}
