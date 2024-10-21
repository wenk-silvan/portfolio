import { Component, inject } from '@angular/core';
import { Gallery } from '../home/photography/photography.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { doc, Firestore, docData } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'gallery',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  gallery$: Observable<Gallery> | undefined
  firestore: Firestore = inject(Firestore)
 
  constructor(
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit(): void {
    let docId = this.route.snapshot.paramMap.get('id')
    if (docId == null) return

    const galleryCollection = doc(this.firestore, 'photography', docId).withConverter({
      fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new Gallery(docId, data['title'], data['description'], data['thumbnail_path'], data['image_paths']);
      },
      toFirestore: (gallery: Gallery) => ({ 
        title: gallery.title, description: gallery.description, thumbnail_path: gallery.thumbnail_path, image_paths: gallery.image_paths
      }),
    });
    this.gallery$ = docData(galleryCollection).pipe(map(gallery => gallery ?? new Gallery()));
  }
}
