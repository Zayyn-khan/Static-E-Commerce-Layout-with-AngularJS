import { Footer } from '../../footer/footer';
import { Header } from './../../header/header';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [Header, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
