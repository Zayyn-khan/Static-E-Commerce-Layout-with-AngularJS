import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './component/pages/home/home';
import { About } from './component/pages/about/about'; 
import { Contact } from './component/pages/contact/contact';

const routes: Routes = [
  { path: '', component: Home },
  { path: '/about-us', component: About},
  { path: '/contact-us', component: Contact},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}