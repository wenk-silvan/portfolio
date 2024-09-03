import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ApiService } from "./api.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.less"
})
export class AppComponent implements OnInit {

  title = "wenk-portfolio";
 
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {
      console.log(data)
    });
  }
}
