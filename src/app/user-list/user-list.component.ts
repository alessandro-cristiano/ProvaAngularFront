import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { HttpClientService } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : User[];

  constructor(private userService: HttpClientService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  
  updateUser(codice: number){
    this.router.navigate(['update-user', codice]);
  }

  deleteUser(codice: number){
    this.userService.deleteUser(codice).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }
}