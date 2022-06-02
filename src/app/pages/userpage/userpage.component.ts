import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";
import {FormGroup,FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-userModel-page',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.scss' , '../../app.component.scss']
})
export class UserPageComponent implements OnInit {
  title = ''
  labels: string[] = ["name","username","password","email","age"];
  userlist: User[] = [];
  userform: FormGroup;

  readonly ROOT_URL: string = "http://localhost:8080/api/user";

  constructor(private userserviceObj: UserService, private fb: FormBuilder) {
     this.userform = fb.group({ name:[''],
                                 username: [''],
                                 password: [''],
                                 email: [''],
                                 age: ['']
                                });

   }

  ngOnInit(): void {
  }


  async getUsers() {
    await this.userserviceObj.getUsers(this.ROOT_URL)
          .subscribe( (res:User[]) => this.userlist = res );
  }



  async setUser() {
    await this.userserviceObj.setUser(this.ROOT_URL,this.userform.value)
          .subscribe();

    this.Clear();
  }



  Clear() {
      this.userlist = [];
      this.userform.setValue({   name:'',
                                 username:'',
                                 password:'',
                                 email: '',
                                 age: ''
    });



  }
}
