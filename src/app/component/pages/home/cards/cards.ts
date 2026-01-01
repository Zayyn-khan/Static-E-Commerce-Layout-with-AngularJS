import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cards.html',
})
export class Cards {


  searchText : String = "";

  cards = [
    {
      title: "Aviator Style",
      description: "A premium black cap designed for everyday wear with a clean and timeless look.",
      image: "https://images.unsplash.com/photo-1513673054901-2b5f51551112?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "300.99"
    },
    {
      title: "Classic Round",
      description: "Breathable and lightweight, perfect for outdoor activities and workouts.",
      image: "https://images.unsplash.com/photo-1603122101829-e56305b0a5f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "18.50"
    },
    {
      title: "Cool Lens Protectors",
      description: "Modern denim style with durable and a soft, comfortable fit.",
      image: "https://images.unsplash.com/photo-1623827871304-b8a107d96092?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "122.00"
    },
    {
      title: "Retro Ray Blockers",
      description: "A clean and fresh design made for modern minimalist fashion lovers.",
      image: "https://images.unsplash.com/photo-1724987980780-37731e257d46?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "17.40"
    },
    {
      title: "Chic Eyewear",
      description: "Modern denim style with durable and a soft, comfortable fit.",
      image: "https://images.unsplash.com/photo-1630351296994-8f204ac72bee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "122.00"
    },
    {
      title: "Modern Frames",
      description: "Modern denim style with durable and a soft, comfortable fit.",
      image: "https://images.unsplash.com/photo-1747731139648-9f6600f18056?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "122.00"
    },
    {
      title: "Street Style",
      description: "Modern denim style with durable and a soft, comfortable fit.",
      image: "https://images.unsplash.com/photo-1630351296333-f106019862c8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "122.00"
    },
    {
      title: "Premium Spectacles",
      description: "Modern denim style with durable and a soft, comfortable fit.",
      image: "https://images.unsplash.com/photo-1544453756-5ded53ef6ba0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "122.00"
    },
  ];

  get filteredCards(){
    if(!this.searchText)
      return this.cards

    const txt = this.searchText.toLowerCase();

    return this.cards.filter( data => {

      return (data.title || '').toLocaleLowerCase().includes(txt);
    })
  }
}