import { Injectable } from '@angular/core';
import { Recommendation } from '../models/recommendation';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  recommendations: Recommendation[];

  constructor() { 
    this.recommendations = [
      new Recommendation(1, "Nicolas Saillard", "CEO Coaxys", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Id nibh tortor id aliquet. Feugiat vivamus at augue eget.", "nicolas_saillard.jpg"),
      new Recommendation(2, "Pierre-Luc Paour", "CTO Syrup Lab", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Id nibh tortor id aliquet. Feugiat vivamus at augue eget.", "pierre_paour.jpg"),
      // new Recommendation(3, "Thomas Ponthoreau", "Formateur Junior Wild Code School", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. <br>Id nibh tortor id aliquet. Feugiat vivamus at augue eget.", ""),
    ];
  }

  getRecommendations() {
    return this.recommendations;
  }
}
