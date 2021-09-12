import { Component, OnInit } from '@angular/core';

import { CardInformation } from '../card-information.model';

@Component({
  selector: 'app-home-why',
  templateUrl: './why.component.html'
})
export class WhyComponent implements OnInit {
  constructor() {}

  information: CardInformation[] = [
    {
      title: 'We are tired of corruption',
      content:
        'Big money influencing our laws, and stupid political discourse. The system is a money making machine. The system is broken,',
      grid: 'top-left'
    },
    {
      title: 'Democracy must be honest and efficient',
      content:
        'Our actual democracy is just a mechanism to let citizens feel iimportant but not because the power really cares about them.',
      grid: 'mid-right'
    },
    {
      title: 'Politicals have to work for citizens',
      content:
        'With the current system the citizens are working hard to fund the system, that funds banks and big corporations. Big companies wants money politicians want power, they are the perfect match to oprress citizens.',
      grid: 'bot-left'
    }
  ];
  ngOnInit(): void {}
}
