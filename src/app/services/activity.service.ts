import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activities: Activity[];

  constructor() { 
    this.activities = [
      new Activity(1, "Développement Web", "laptop.svg"),
      new Activity(2, "Responsive", "mobile-analytics.svg"),
      new Activity(3, "Web Design", "art.svg"),
      new Activity(4, "Graphiste", "vector.svg")
    ];
  }

  getActivities() {
    return this.activities;
  }
}
