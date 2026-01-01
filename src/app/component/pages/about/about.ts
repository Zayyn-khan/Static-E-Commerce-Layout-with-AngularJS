import { Footer } from './../../footer/footer';
import { Component } from '@angular/core';
import { Header } from '../../header/header';
@Component({
  selector: 'app-about',
  imports: [Header, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
