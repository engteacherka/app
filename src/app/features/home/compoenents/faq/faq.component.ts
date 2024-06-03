import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FAQComponent {
  textArray: any[] =[
    {
      heading: "Якщо я точно не знаю свій рівень?",
      paragraph: "Напишіть мені в Інстаграм & я надам посилання на тестування.",
      isParagraphVisible: false,
    },
    {
      heading: "Скільки триває навчання на одному рівні?",
      paragraph: "Усе залежить індивідуально від запиту, проте в середньому курс триває 10+ місяців.",
      isParagraphVisible: false,
    },
    {
      heading: "Як відбувається оплата?",
      paragraph: "Ви сплачуєте одразу по закінченню заняття або за 2 уроки наперед.",
      isParagraphVisible: false,
    },
    {
      heading: "На якій платформі проходять заняття?",
      paragraph: "Уроки проходять в ZOOM з використанням платформи Miro.",
      isParagraphVisible: false,
    }
  ];

  toggleParagraph(index: number) {
    this.textArray[index].isParagraphVisible = !this.textArray[index].isParagraphVisible;
  }
}
