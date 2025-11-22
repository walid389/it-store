import { Routes } from '@angular/router';
import {Home} from './site/home/home';
import {Laptops} from './site/laptops/laptops';
import {Gaming} from './site/gaming/gaming';
import {Smartphone} from './site/smartphone/smartphone';
import {Accessoires} from './site/accessoires/accessoires';
import {Printers} from './site/printers/printers';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'laptops', component: Laptops },
    { path: 'gaming', component: Gaming },
    { path: 'smartphone', component: Smartphone },
    { path: 'accessoires', component: Accessoires },
    { path: 'printers', component: Printers },
];
