import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import {User} from  '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  
  codice: number;
  user: User = new User();
  
  constructor(private http: HttpClientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.codice = this.route.snapshot.params['codice'];

    this.http.getUserById(this.codice).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.http.updateUser(this.codice, this.user).subscribe( data =>{
      this.goToUserList();
    }
    , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/lista']);
  }
}
