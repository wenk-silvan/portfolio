import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'gallery/:id', component: GalleryComponent },
];
