import { Injectable } from '@angular/core';
import { Recommendation } from '../models/recommendation';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  recommendations: Recommendation[];

  constructor() { 
    this.recommendations = [
      new Recommendation(1, "Nicolas Saillard", "CEO Coaxys", "Un job dating de 15 min m’a suffi pour apprécier le tempérament d’Hugo qui a confirmé sa soif d’apprendre au cours de son stage où il a également démontré une grosse capacité de travail et une bonne autonomie indispensable dans un contexte si particulier.", "nicolas_saillard.jpg"),
      new Recommendation(2, "Pierre-Luc Paour", "CTO Sirup Lab", "Dans le cadre d’un test technique, Hugo a réussi à prendre en main très efficacement deux technologies (ReactJS et GraphQL) qu’il n’avait pas utilisées auparavant pour livrer dans les temps un résultat impressionnant. Beaucoup d’initiative et d’humilité.", "pierre_paour.jpg"),
      // new Recommendation(3, "Thomas Ponthoreau", "Formateur Junior Wild Code School", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. <br>Id nibh tortor id aliquet. Feugiat vivamus at augue eget.", ""),
    ];
  }

  getRecommendations() {
    return this.recommendations;
  }
}
