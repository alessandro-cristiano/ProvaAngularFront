import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../user';
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

     deleteUser(codice: number): Observable<Object>{
      return this.httpClient.delete("http://localhost:8087/lista"+"/"+codice);
    }
  
     createUser(user) {
      return this.httpClient.post<User>("http://localhost:8087/addUser", user);
    }

     updateUser(codice: number, user: User): Observable<Object> {
      return this.httpClient.put(`http://localhost:8087/lista/${codice}`, user);
    }

    getUserById(codice: number): Observable<User>{
      return this.httpClient.get<User>("http://localhost:8087/lista"+"/"+codice);
    }

   

}
