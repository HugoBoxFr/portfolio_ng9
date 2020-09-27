import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[];

  constructor() { 
    this.projects = [
      new Project(1, "Saint Seiya", "The Memory Game", ["ReactJs", "Javascript"], "saint_seiya.jpg", "Projet perso"),
      new Project(2, "TimeToDo!", "Application de gestion de présence en entreprise", ["Angular 6", "Laravel", "Typescript", "Php", "Javascript"], "timetodo.jpg", "Projet client"),
      new Project(3, "Bambino", "Site e-commerce avec configurateur de vêtements pour bébés", ["Angular 8", "NodeJs", "Express", "Typescript", "Javascript"], "bambino.jpg", "Projet client formation"),
      new Project(4, "Santa Fair", "Site de référencement de jouets pour un Noêl écolo", ["Angular 8", "NodeJs", "Express", "Typescript", "Php", "Javascript"], "santa_fair.jpg", "Projet Hackathon 48h formation"),
      new Project(5, "Bim!", "Générateur d'avatars", ["Angular 8", "NodeJs", "Express", "Typescript", "Javascript"], "bim.jpg", "Projet formation"),
      new Project(6, "South Park: Brain Destroyer", "The Memory Game", ["Angular 8", "Typescript", "Javascript"], "south_park.jpg", "Projet formation"),
      new Project(7, "Zombie Nation", "Shoot them all", ["Javascript Vanilla"], "zombie.jpg", "Projet Hackathon 24h formation"),
      new Project(8, "L'Atelier", "Coiffeur Barbier", ["Html5", "Css3", "JQuery"], "atelier.jpg", "Projet vitrine"),
      new Project(9, "Le Central", "Restaurateur", ["Html5", "Css3", "JQuery"], "central.jpg", "Projet vitrine"),
    ];
  }

  getProjects(): Project[] {
    return this.projects;
  };


}
