import { Component } from '@angular/core';
import { IntroductionComponent } from "./introduction/introduction.component";
import { ProjectsComponent } from "./projects/projects.component";
import { CareerComponent } from "./career/career.component";
import { PhotographyComponent } from "./photography/photography.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [IntroductionComponent, ContactComponent, ProjectsComponent, CareerComponent, PhotographyComponent, BlogsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
