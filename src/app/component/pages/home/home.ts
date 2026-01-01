import { Testimonials } from './testimonials/testimonials';
import { SubscriptionBanner } from './subscription-banner/subscription-banner';
import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { Banner } from './banner/banner';
import { Cards } from './cards/cards';
import { Footer } from '../../footer/footer';


@Component({
  selector: 'app-home',
  imports: [Header, Banner, Cards, SubscriptionBanner, Testimonials, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
