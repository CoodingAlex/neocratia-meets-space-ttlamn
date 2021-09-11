import { Component, OnInit } from '@angular/core';

import { CardInformation } from '../card-information.model';

@Component({
  selector: 'app-home-how',
  templateUrl: './how.component.html'
})
export class HowComponent implements OnInit {
  constructor() {}

  information: CardInformation[] = [
    {
      title: 'Group of political and tech activists all arround the world',
      content: `With the current system the citizens are working hard to fund the system, that funds
        banks and big corporations. Big companies wants money, politicians want power, they are
        the perfect match to oprress citizens.`
    },
    {
      title: 'Thinking global, ambitious, and non-for-profit.',
      content: `To make this big, we need full-time people, so we will fund our selves with a
      subscription moodel you can subscribe on <strong>Vaki Sponsots</strong>`
    },
    {
      title: 'Transparency on public money',
      content: `With the current system the citizens are working hard to fund the system, that funds
      banks and big corporations. Big companies wants money, politicians want power, they are
      the perfect match to oprress citizens.`
    }
  ];

  ngOnInit(): void {}
}
