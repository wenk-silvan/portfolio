import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Blog } from '../../blog/blog.model';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'blogs',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs$: Observable<Blog[]>
  firestore: Firestore = inject(Firestore)

  constructor() {
    const blogsCollection = collection(this.firestore, 'blogs').withConverter({
      fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new Blog(snapshot.id, data['title'], data['date'], data['author'], data['image_path'], data['lead'], data['md_path']);
      },
      toFirestore: (item: Blog) => ({ 
        id: item.id,
        title: item.title,
        date: item.date,
        author: item.author,
        image_path: item.image_path,
        lead: item.lead,
        md_path: item.md_path
      }),
    });
    this.blogs$ = collectionData(blogsCollection).pipe(
      map(blog => blog.sort((a, b) => b.date.localeCompare(a.date)) ?? []));
  }

}
