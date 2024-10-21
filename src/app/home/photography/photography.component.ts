import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Gallery } from './photography.model';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'photography',
  standalone: true,
  imports: [CommonModule, RouterLink, AsyncPipe],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent {
  galleries$: Observable<Gallery[]>
  firestore: Firestore = inject(Firestore)

  constructor() {
    const galleryCollection = collection(this.firestore, 'photography').withConverter({
      fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new Gallery(snapshot.id, data['title'], data['description'], data['thumbnail_path'], data['image_paths']);
      },
      toFirestore: (gallery: Gallery) => ({ 
        title: gallery.title, description: gallery.description, thumbnail_path: gallery.thumbnail_path, image_paths: gallery.image_paths
      }),
    });
    this.galleries$ = collectionData(galleryCollection).pipe(
      map(galleries => galleries.sort(() => Math.random() - 0.5)) ?? []);
  }
}
