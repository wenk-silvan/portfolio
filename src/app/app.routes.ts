import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'gallery/:id', component: GalleryComponent },
    { path: 'blog/:id', component: BlogComponent },
];
