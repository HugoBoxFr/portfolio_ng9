import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[];

  constructor() { 
    this.projects = [
      new Project(1, "Saint Seiya", "The Memory Game", ["ReactJs", "Javascript"], "saint_seiya.jpg", "Projet perso", true, "https://hugoboxfr.github.io/react_memory_game/"),
      new Project(2, "Le Livre Scolaire", "Application de manuel scolaire", ["ReactJs", "Javascript", "Graphql"], "livrescolaire.jpg", "Test pour Syrup Lab", true, "https://lelivrescolaire.netlify.app/"),
      new Project(3, "TimeToDo!", "Application de gestion de présence en entreprise", ["Angular 6", "Laravel", "Typescript", "Php", "Javascript"], "timetodo.jpg", "Projet client", true, "https://time-to-do.ch/"),
      new Project(4, "Bambino", "Site e-commerce avec configurateur de vêtements pour bébés", ["Angular 8", "NodeJs", "Express", "Typescript", "Javascript", "MySql"], "bambino.jpg", "Projet client formation", false),
      new Project(5, "Santa Fair", "Site de référencement de jouets pour un Noêl écolo", ["Angular 8", "NodeJs", "Express", "Typescript", "Javascript", "MySql"], "santa_fair.jpg", "Projet Hackathon 48h formation", false),
      new Project(6, "Bim!", "Générateur d'avatars", ["Angular 8", "Typescript", "Javascript"], "bim.jpg", "Projet formation", true, "https://bim.now.sh/"),
      new Project(7, "South Park: Brain Destroyer", "The Memory Game", ["Angular 8", "Typescript", "Javascript"], "south_park.jpg", "Projet formation", true, "https://hugoboxfr.github.io/memory_project/"),
      new Project(8, "Zombie Nation", "Shoot them all", ["Javascript Vanilla"], "zombie.jpg", "Projet Hackathon 24h formation", false),
      new Project(9, "L'Atelier", "Coiffeur Barbier", ["Html5", "Css3", "JQuery"], "atelier.jpg", "Projet vitrine", true, "https://hugoboxfr.github.io/atelier/"),
      new Project(10, "Le Central", "Restaurateur", ["Html5", "Css3", "JQuery"], "central.jpg", "Projet vitrine", true, "https://hugoboxfr.github.io/central/")
    ];
  }

  getProjects(): Project[] {
    return this.projects;
  };


}
