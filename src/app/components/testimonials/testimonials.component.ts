import { Component, OnInit } from '@angular/core';
import { Recommendation } from 'src/app/models/recommendation';
import { RecommendationService } from 'src/app/services/recommendation.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  recommendations: Recommendation[];

  constructor(
    private recommendationService: RecommendationService
  ) { }

  ngOnInit(): void {
    this.recommendations = this.recommendationService.getRecommendations();
  }

}
