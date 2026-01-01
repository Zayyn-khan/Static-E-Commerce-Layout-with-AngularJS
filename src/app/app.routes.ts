import { Contact } from './component/pages/contact/contact';
import { Routes } from '@angular/router';
import { Home } from './component/pages/home/home';
import { About } from './component/pages/about/about';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: About},
    {path: 'contact', component: Contact}
];
