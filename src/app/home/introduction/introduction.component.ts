import { Component, inject } from '@angular/core';
import { Introduction } from './introduction.model';
import { map, Observable } from 'rxjs';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'introduction',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {
  introduction$: Observable<Introduction>
  firestore: Firestore = inject(Firestore)

  constructor() {
    const introductionDoc = doc(this.firestore, 'introduction', 'jK92xD6avOVRczOtif7p').withConverter({
      fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new Introduction(data['portrait_path'], data['icons'], data['description']);
      },
      toFirestore: (intro: Introduction) => ({ 
        portrait_path: intro.portrait_path, icons: intro.icons, description: intro.description 
      }),
    });
    this.introduction$ = docData<Introduction>(introductionDoc).pipe(map(intro => intro ?? new Introduction()))
  }
}
