import AOS from 'aos';
import 'aos/dist/aos.css';

import { Component, Renderer2 } from '@angular/core';
import 'animate.css';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
    0: { items: 1 },
    400: { items: 2 },
    900: { items: 3 }
    },
    nav: true,
    };

  constructor(public renderer: Renderer2) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 2000,
      });
    }
  }
}
