import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignupRoutingModule } from "./signup-routing.module";
import { FormsModule } from "@angular/forms";
import { SignupComponent } from "./signup.component";
import { SharedUiModule } from "../../../shared-ui/shared-ui.module";

@NgModule({
  imports: [CommonModule, SignupRoutingModule, FormsModule, SharedUiModule],
  declarations: [SignupComponent],
  providers: [],
})
export class SignupModule {}
