import {ChangeDetectorRef, Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
  animations: [
    trigger('fade', [
      state('appear', style({ opacity: 1 })),
      state('disappear', style({ opacity: 0 })),

      transition('appear => disappear', [animate('0.5s')]),
      transition('disappear => appear', [animate('0.5s')])
    ])
  ],
})
export class ReviewsComponent {
  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }
  slides = [
    { id: 1, src: 'assets/img/review1.png' },
    { id: 2, src: 'assets/img/review2.png' },
    { id: 3, src: 'assets/img/review3.png' },
    { id: 4, src: 'assets/img/review4.png' },
    { id: 5, src: 'assets/img/review5.png' },
    { id: 6, src: 'assets/img/review6.png'}
  ];
  activeSlideId = 1;
  fadeAnimationState = 'appear';

  ngOnInit(): void {

  }

  navigate(direction: 'prev' | 'next'): void {
    this.fadeAnimationState = 'disappear';
    setTimeout(() => {
      const currentIndex = this.slides.findIndex(slide =>
        slide.id === this.activeSlideId);
      if (direction === 'prev') {
        this.activeSlideId
          = this.slides[currentIndex - 2]?.id || this.slides[this.slides.length - 1].id;
      } else {
        this.activeSlideId
          = this.slides[currentIndex + 2]?.id || this.slides[0].id;
      }
      this.changeDetectorRef.detectChanges();
      this.fadeAnimationState = 'appear';
    }, 500)

  }

  getSlideSrc(slideId: number): string {
    return this.slides.find(slide => slide.id === slideId)?.src || '';
  }
}
