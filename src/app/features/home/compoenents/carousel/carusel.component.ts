import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
import {query} from "express";
import {CarouselModule} from "ngx-bootstrap/carousel";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CarouselModule
  ],
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.scss',
  animations: [
   trigger('fade', [
     state('appear', style({ opacity: 1 })),
     state('disappear', style({ opacity: 0 })),

     transition('appear => disappear', [animate('0.5s')]),
     transition('disappear => appear', [animate('0.5s')])
   ]),
    trigger('carousel', [
      state('default', style({ transform: 'translateX(0)', opacity: 1 })),

      state('appear-next', style({ transform: 'translateX(100%)' })),
      state('appear-prev', style({ transform: 'translateX(-100%)' })),

      state('disappear-next', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('disappear-prev', style({ transform: 'translateX(100%)', opacity: 0 })),


      transition('default => disappear-prev', [animate('0.5s', keyframes(
        [
          style({ transform: 'translateX(100%)',opacity: 0, offset: 0.5 }),
          style({ transform: 'translateX(0)',opacity: 0, offset: 1 }),
        ]
      ))]),
      transition('disappear => appear', [animate('0.5s')]),
    ])
  ],
})
export class CaruselComponent implements OnInit {
  noWrapSlides = false;
  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }
  slides = [
    { id: 1, src: 'assets/img/carousel1.png' },
    { id: 2, src: 'assets/img/carousel2.png' },
    { id: 3, src: 'assets/img/carousel3.png' },
    { id: 4, src: 'assets/img/carousel4.png' },
    { id: 5, src: 'assets/img/carousel5.png' },
    { id: 6, src: 'assets/img/carousel6.png'}
  ];
  activeSlideId = 1;
  fadeAnimationState = 'default';

  ngOnInit(): void {

  }

  navigate(direction: 'prev' | 'next'): void {
   this.fadeAnimationState = 'disappear';
    setTimeout(() => {
      const currentIndex = this.slides.findIndex(slide =>
        slide.id === this.activeSlideId);
      if (direction === 'prev') {
        this.activeSlideId
          = this.slides[currentIndex - 1]?.id || this.slides[this.slides.length - 1].id;
      } else {
        this.activeSlideId
          = this.slides[currentIndex + 1]?.id || this.slides[0].id;
      }

     this.fadeAnimationState = 'appear';
    }, 500)

  }

  getSlideSrc(slideId: number): string {
    return this.slides.find(slide => slide.id === slideId)?.src || '';
  }
}
