import { CommonModule } from "@angular/common";
import { TeamComponent } from "./team.component";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
TeamComponent    ],
    imports: [
      CommonModule,
      FormsModule,
    ],
    
    providers: [],
    bootstrap: [
    ]
  })
  export class TeamModule { }
  