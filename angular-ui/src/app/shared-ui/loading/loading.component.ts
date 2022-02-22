/**
 * Name: LoadingComponent
 * @description: This component use for common loading messages like loading service it has shared in share module.
 */
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { GlobalService } from "../services/global.service";
@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.css"],
})
export class LoadingComponent implements OnInit {
  subscription: Subscription;
  loadingLabel = "Loading... Please Wait.";
  constructor(private globalService: GlobalService) {
    /** by it we can change loading message according to component action */
    this.subscription = this.globalService
      .getLoadingLabel()
      .subscribe((message) => {
        if (message) {
          this.loadingLabel = message.text;
        }
      });
  }
  ngOnInit() {}
}
