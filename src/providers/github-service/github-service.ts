import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { REPOSITORY_LIST } from '../../mocks/repository.mocks';
import { USER_LIST } from '../../mocks/user.mocks';
import { Repository } from '../../model/repository.interface';
import { User } from '../../model/user.interface';

// import 'rxjs/add/operator/throw';
/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubService {
  private baseUrl: string = 'https://api.github.com/users'
  private reposUrl: string = 'repos';
  constructor(private http: Http) {
  }
  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
    .do((data: Response) => console.log(data))
    .map((data:Response) => data.json())
    .do((data: Response) => console.log(data))
    .catch((error: Response) => Observable.throw(error.json().error || "Server error."))
  }
  getRepositoryInformation(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
    .do((data: Response) => console.log(data))
    .map((data:Response) => data.json())
    .do((data: Response) => console.log(data))
    .catch((error: Response) => Observable.throw(error.json().error || "Server error."))
  }

  mockGetUserInformation(username:string) : Observable<User>{
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }
  mockGetRepositoryInformation(username: string): Observable<Repository[]>{
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }

}
