import { Component, OnInit } from '@angular/core';

import { CardInformation } from '../card-information.model';

@Component({
  selector: 'app-home-what',
  templateUrl: './what.component.html'
})
export class WhatComponent implements OnInit {
  constructor() {}

  information: CardInformation[] = [
    {
      title: 'Citizen oversight',
      content:
        'Products that helps people to check what their goverments are doing and how, what or why they are taking the decitions they make.,'
    },
    {
      title: 'Liquid democracy',
      content: `Democracy should be liquid, not all the votes on a goverment should be the same. Citizeens should be able to decide who has more their votes. Also, politicians must make public their opinion about every law and project they will vote, citizens should be invoolved on the debat so to who give their vote.`
    },
    {
      title: 'Transparent money',
      content: `Money moovements should be transparent, politicians can't owe favors to corporations or
        rich people, they need to be free to take the best decisions for the people. Also, the
        money the goverment spends comes from oour taxes, is our mooney, so we need to see where
        it goes, why it goes there and what iis the projections. We are theiir investments, they
        need to show us the money.`
    }
  ];
  ngOnInit(): void {}
}
