import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : "", 'title' : 'Home',
        loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent)
    },
    {
        path : "about", 'title' : 'About',
        loadComponent: () => import('./about/about.component').then((c) => c.AboutComponent)
    },
    {
        path : "products", 'title' : 'Products',
        loadComponent: () => import('./products/products.component').then((c) => c.ProductsComponent)
    },
    {
        path : "contact", 'title' : 'Contact',
        loadComponent: () => import('./contact/contact.component').then((c) => c.ContactComponent)
    },
    { 
        path: 'products/product/:id', 'title' : 'Product Details',
        loadComponent: () => import('./products/details/details.component').then((c) => c.DetailsComponent)
    }
];