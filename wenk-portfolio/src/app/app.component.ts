import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ApiService } from "./api.service";
import { IntroductionComponent } from "./introduction/introduction.component";
import { ProjectsComponent } from "./projects/projects.component";
import { CareerComponent } from "./career/career.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, IntroductionComponent, ProjectsComponent, CareerComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
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
