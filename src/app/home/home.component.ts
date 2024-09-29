import { Component } from '@angular/core';
import { IntroductionComponent } from "../introduction/introduction.component";
import { ProjectsComponent } from "../projects/projects.component";
import { CareerComponent } from "../career/career.component";
import { AppData } from "../app-data.model";
import { PhotographyComponent } from "../photography/photography.component";
import { ApiService } from '../api.service';
import { BlogsComponent } from "../blogs/blogs.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [IntroductionComponent, ProjectsComponent, CareerComponent, PhotographyComponent, BlogsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public data: AppData = new AppData()
 
  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void {
    this.apiService.getData().subscribe(result => {
      this.data = result
    });
  }
}
