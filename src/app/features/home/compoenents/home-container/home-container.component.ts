import { Component } from '@angular/core';
import {HeroComponent} from "../hero/hero.component";
import {AdvantagesComponent} from "../advantages/advantages.component";
import {FormatsComponent} from "../formats/formats.component";
import {CaruselComponent} from "../carousel/carusel.component";
import {LessonsComponent} from "../lessons/lessons.component";
import {FAQComponent} from "../faq/faq.component";
import {ReviewsComponent} from "../reviews/reviews.component";

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [
    HeroComponent,
    AdvantagesComponent,
    FormatsComponent,
    CaruselComponent,
    LessonsComponent,
    FAQComponent,
    ReviewsComponent
  ],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})
export class HomeContainerComponent {

}
