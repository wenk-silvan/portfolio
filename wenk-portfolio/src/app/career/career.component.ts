import { Component } from '@angular/core';

@Component({
  selector: 'career',
  standalone: true,
  imports: [],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
  career = [
    { "label": "Today", "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Labore et dolore magna aliquyam erat, sed diam voluptua." },
    { "label": "2023", "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Labore et dolore magna aliquyam erat, sed diam voluptua." },
    { "label": "2022", "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Labore et dolore magna aliquyam erat, sed diam voluptua." },
    { "label": "2021", "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Labore et dolore magna aliquyam erat, sed diam voluptua." },
  ]
}
