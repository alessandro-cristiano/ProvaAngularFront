import { Component, OnInit } from '@angular/core';
import { HttpClientService,User } from '../service/http-client.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;

  constructor(
    private httpClientService:HttpClientService
  ) { }
  ngOnInit() {
    this.httpClientService.getUsers().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }
handleSuccessfulResponse(response)
{
    this.users=response;
}

deleteUser(user: User): void {
  this.httpClientService.deleteUser(user)
    .subscribe( data => {
      this.users = this.users.filter(u => u !== user);
    })
}
}
