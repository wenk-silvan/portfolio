import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Photography } from './photography.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'photography',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent {

  @Input() data: Photography = new Photography()

  navigateToGallery(index: number) {

  }
}
