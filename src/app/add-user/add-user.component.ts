import { Component, OnInit } from '@angular/core';
import { HttpClientService, User } from '../service/http-client.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User(null,"","","","");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createUser(): void {
    this.httpClientService.createUser(this.user)
        .subscribe( data => {
          alert("User aggiunto.");
        });

  };

}
