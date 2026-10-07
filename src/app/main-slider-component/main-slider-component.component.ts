import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-slider-component.component.html',
styleUrls: ['./main-slider-component.component.css']
})
export class MainSliderComponent {
  slides = [
    {
      image: 'https://i.pinimg.com/1200x/36/f3/d5/36f3d5fbb3ebbcc4d710bf82798109f2.jpg',
      title: 'Welcome to Our Store',
      caption: 'Discover amazing deals and new arrivals today.'
    },
    {
      image: 'https://i.pinimg.com/736x/ba/64/f4/ba64f492ad6a399fa929caa9abc27fec.jpg',
      title: 'Exclusive Collection',
      caption: 'Upgrade your daily essentials with style.'
    },
    {
      image: 'https://i.pinimg.com/736x/09/a6/22/09a622d27ee461bcd277d8e7eefad9e3.jpg',
      title: 'Limited Time Offer',
      caption: 'Get up to 50% off on sencond items.'
    },
     {
      image: 'https://i.pinimg.com/736x/74/86/ec/7486ec72dbca32f77c6ab61c58a427fc.jpg',
      title: 'Spacil offer during Pchum Ben',
      caption: 'Get up to 50% off on selected items.'
    }
  ];
}