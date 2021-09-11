import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  constructor() {}

  ngOnInit(): void {}
}
