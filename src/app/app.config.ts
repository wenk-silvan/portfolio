import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { IMAGE_CONFIG } from '@angular/common';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideMarkdown(),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    { provide: IMAGE_CONFIG, useValue: { disableImageSizeWarning: true, disableImageLazyLoadWarning: true } }, 
    provideFirebaseApp(() => initializeApp({"projectId":"wenk-portfolio","appId":"1:1095180988209:web:750e51d0b6aa3a729fca10","storageBucket":"wenk-portfolio.appspot.com","apiKey":"AIzaSyDczTRL1sEqnnE2cr58BZJe9wtpvlrlQus","authDomain":"wenk-portfolio.firebaseapp.com","messagingSenderId":"1095180988209","measurementId":"G-S8FYRPF0T4"})), 
    provideFirestore(() => getFirestore())
  ]
};
