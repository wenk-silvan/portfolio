import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from './projects.model';


@Component({
  selector: 'projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  @Input() data: Projects = new Projects()
  
}
