import { NgModule } from "@angular/core";
import { SearchResultComponent } from "./search-result/search-result";
import { IonicModule } from "ionic-angular";
import { RepositoriesComponent } from './repositories/repositories';

@NgModule({
    imports:[
         IonicModule
    ],
    declarations:[
        SearchResultComponent,
        RepositoriesComponent
    ],

    exports:[
        SearchResultComponent,
        RepositoriesComponent
    ]
})
export class ComponentsModule{

}