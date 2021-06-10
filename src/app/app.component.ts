import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  USERS = new Array<User>();
    
  constructor(private userService: UserService) {}
    
  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => {
      this.USERS = res;
    });
  }

}
