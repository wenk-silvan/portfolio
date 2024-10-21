import { Component, inject, Input } from '@angular/core';
import { CareerItem } from './career.model';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'career',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
  career$: Observable<CareerItem[]>
  firestore: Firestore = inject(Firestore)

  constructor() {
    const careerCollection = collection(this.firestore, 'career').withConverter({
      fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new CareerItem(data['label'], data['text']);
      },
      toFirestore: (item: CareerItem) => ({ 
        label: item.label, text: item.text
      }),
    });
    this.career$ = collectionData(careerCollection).pipe(
      map(career => career.sort((a, b) => b.label.localeCompare(a.label)) ?? []));
  }

}
