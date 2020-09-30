import { Component, Input, OnInit } from '@angular/core';
import { Recommendation } from 'src/app/models/recommendation';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {
  @Input() recommendation: Recommendation;

  constructor() { }

  ngOnInit(): void {
  }

}
