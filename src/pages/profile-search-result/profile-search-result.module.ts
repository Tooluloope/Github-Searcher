import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearchResultPage } from './profile-search-result';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProfileSearchResultPage
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchResultPage),
    ComponentsModule
  ],
  exports:[ 
    ProfileSearchResultPage
  ]
})
export class ProfileSearchResultPageModule {}
