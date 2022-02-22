import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoadingComponent } from "./loading/loading.component";
import { AlertComponent } from "./alert";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";
import { ModalModule, BsDropdownModule } from "ngx-bootstrap";
import { CharacterOnlyDirective } from "./directive/onlycharacter.directive";
import { NumberOnlyDirective } from "./directive/onlynumber.directive";
import { DisabledDirective } from "./directive/disabled.directive";
import { TimeAgoPipe } from "time-ago-pipe";

/** Here is define some common component and directive*/
const SHARED_COMPONENTS = [
  LoadingComponent,
  AlertComponent,
  CharacterOnlyDirective,
  NumberOnlyDirective,
  DisabledDirective,
  TimeAgoPipe,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
    }),
    NgxSpinnerModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  declarations: SHARED_COMPONENTS,
  exports: SHARED_COMPONENTS,
  entryComponents: [],
})
export class SharedUiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedUiModule,
      providers: [],
    };
  }
}
