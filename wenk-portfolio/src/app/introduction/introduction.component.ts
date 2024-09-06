import { Component, Input } from '@angular/core';
import { Introduction } from './introduction.model';
import { AppData } from '../app-data.model';

@Component({
  selector: 'introduction',
  standalone: true,
  imports: [],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {

  @Input() data: Introduction = new Introduction()

}
