import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {
  @Input() photo: string;
  @Input() name: string;
  @Input() twitterUrl: string;
  @Input() bioUrl: string;
  @Input() description: string;
  @Input() twitter: string;

  constructor() {}

  ngOnInit(): void {}
}
