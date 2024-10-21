import { Component } from '@angular/core';
import { Blog } from './blog.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'blog',
  standalone: true,
  imports: [RouterLink, MarkdownModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  public data: Blog = new Blog()
 
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {}
  
  ngOnInit(): void {
    let index = this.route.snapshot.paramMap.get('id');
    this.apiService.getData().subscribe(result => {
      this.data = result.blogs.blogs[Number(index)]
    });
  }
}
