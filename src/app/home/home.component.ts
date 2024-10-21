import { Component } from '@angular/core';
import { IntroductionComponent } from "./introduction/introduction.component";
import { ProjectsComponent } from "./projects/projects.component";
import { CareerComponent } from "./career/career.component";
import { PhotographyComponent } from "./photography/photography.component";
import { BlogsComponent } from "./blogs/blogs.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [IntroductionComponent, ProjectsComponent, CareerComponent, PhotographyComponent, BlogsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
