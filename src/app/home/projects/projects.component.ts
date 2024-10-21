import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Project } from './projects.model';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects$: Observable<Project[]>
  firestore: Firestore = inject(Firestore)

  constructor() {
    const projectsCollection = collection(this.firestore, 'projects').withConverter({
      fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new Project(data['image_path'], data['title'], data['skills'], data['text'], data['index']);
      },
      toFirestore: (project: Project) => ({ 
        image_path: project.image_path, title: project.title, skills: project.skills, text: project.text, index: project.index
      }),
    });
    this.projects$ = collectionData(projectsCollection).pipe(
      map(projects => projects.sort((a, b) => a.index.toString().localeCompare(b.index.toString()))) ?? []);
  }
}
