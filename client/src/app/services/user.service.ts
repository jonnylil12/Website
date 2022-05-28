import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(ROOT_URL): Observable<User[]> {
    return this.http.get<User[]>(ROOT_URL);

  }

  setUser(ROOT_URL , userModel:User ): Observable<string>{

    return this.http.post<string>(ROOT_URL,userModel);

  }


}
