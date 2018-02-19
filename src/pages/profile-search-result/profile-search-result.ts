import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../providers/github-service/github-service';
import { User } from '../../model/user.interface';
import { Repository } from '../../model/repository.interface';
/**
 * Generated class for the ProfileSearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({})
@Component({ 
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {
  username: string
  user: User
  repositories: Repository[];
  constructor(private github: GithubService, private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewWillLoad() {
  this.username =  this.navParams.get('username');
  console.log(this.username);
  if (this.username) {
    this.getUserInformation();
  }
  }
  getUserInformation():void {

    this.github.getUserInformation(this.username)
    .subscribe((data: User) => this.user = data );
    this.github.getRepositoryInformation(this.username)
    .subscribe((data:Repository[]) => this.repositories = data);
  //   this.github.mockGetUserInformation(this.username)
  //   .subscribe((data:User) => this.user = data);

  // this.github.mockGetRepositoryInformation(this.username)
  // .subscribe((data:Repository[]) => this.repositories = data);
  }

}
