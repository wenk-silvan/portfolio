import { Component, Input } from '@angular/core';
import { Career } from './career.model';

@Component({
  selector: 'career',
  standalone: true,
  imports: [],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {

  @Input() data: Career = new Career()

}
