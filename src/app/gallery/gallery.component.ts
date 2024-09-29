import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Gallery } from '../home/photography/photography.model';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'gallery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  public data: Gallery = new Gallery()
  public link_back: string = ""
 
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {}
  
  ngOnInit(): void {
    let index = this.route.snapshot.paramMap.get('id');
    this.apiService.getData().subscribe(result => {
      this.data = result.photography.galleries[Number(index)]
      this.link_back = result.link_back_text
    });
  }
}
