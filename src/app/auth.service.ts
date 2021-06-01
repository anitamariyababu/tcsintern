import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   adduser(user: any) {
//     throw new Error('Method not implemented.');
//   }
//   userlogin(user: { uname: string; password: string; }) {
//     throw new Error('Method not implemented.');
//   }

//   constructor() { }
// }
@Injectable()
export class AuthService {


  private _loginUrl = "http://localhost:3000/login";

  constructor(private http: HttpClient) { }


  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  adduser(data: any) {
    return this.http.post<any>('http://localhost:3000/register', { "user": data });
  };
  userlogin(data: any) {
    return this.http.post<any>('http://localhost:3000/userlogin', { "user": data });
  };
}
