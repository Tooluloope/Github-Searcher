import { Component, Input } from '@angular/core';
import { Repository } from '../../model/repository.interface';

/**
 * Generated class for the RepositoriesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'repositories',
  templateUrl: 'repositories.html'
})
export class RepositoriesComponent {
 @Input() repository: Repository;

  constructor() {
    
  }

}
