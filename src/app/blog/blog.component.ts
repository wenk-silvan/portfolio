import { Component, inject } from '@angular/core';
import { Blog } from './blog.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'blog',
  standalone: true,
  imports: [RouterLink, MarkdownModule, AsyncPipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blog$: Observable<Blog> | undefined
  firestore: Firestore = inject(Firestore)
 
  constructor(
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit(): void {
    let docId = this.route.snapshot.paramMap.get('id')
    if (docId == null) return

    const blogDocument = doc(this.firestore, 'blogs', docId).withConverter({
      fromFirestore: (snapshot) => {
        const data = snapshot.data();

        let x = new Blog(docId, data['title'], data['date'], data['author'], data['image_path'], data['lead'], data['md_path']);
        console.log(x.md_path)
        return x;
      },
      toFirestore: (blog: Blog) => ({ 
        id: docId, title: blog.title, date: blog.date, author: blog.author, image_path: blog.image_path, lead: blog.lead, md_path: blog.md_path
      }),
    });
    this.blog$ = docData(blogDocument).pipe(map(blog => blog ?? new Blog()));
  }
}
