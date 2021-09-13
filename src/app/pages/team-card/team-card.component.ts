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
  @Input() index: number;

  column: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.index += 1;
    if (this.index % 2 !== 0) {
      this.column = 2;
    }
    console.log('hola');
  }
}
