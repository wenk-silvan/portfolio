import { Component, Input } from '@angular/core';
import { Blogs } from './blogs.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'blogs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

  @Input() data: Blogs = new Blogs()

}
