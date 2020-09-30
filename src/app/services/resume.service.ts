import { Injectable } from '@angular/core';
import { Resume } from '../models/resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  xps: Resume[];
  education: Resume[];

  constructor() { 
    this.xps = [
      new Resume(1, "Développeur Web", "Stage pour un client Suisse 'TimeToDo!'", "Coaxys Lyon", ["Août 2020", "Fév. 2020"], ["Deboggage", "Création de routes", "Ajout de nouvelles fonctionnalités", "Ajout de nouvelles pages"], ["Angular6", "Laravel", "Typescript", "Javascript", "Php", "Html", "Css"]),
      new Resume(2, "Infographiste", "Activité en parallèle de mon emploi de barman", "Restaurant L'Apostrophe Reims", ["2019", "2016"], ["Affiche", "Flyer", "Carte cadeau"], ["Illustrator", "Photoshop"])
    ];

    this.education = [
      new Resume(1, "Développeur Web & Web Mobile", "Titre professionnel de niveau III",  "Wild Code School Lyon", ["Sept. 2020", "Fév. 2019"], ["4 projets dont 1 client", "2 hackathons", "dojos"], ["Angular8", "NodeJs", "Javascript", "Html", "Css", "Bootstrap"]),
      new Resume(2, "Infographiste Multimédia", "Titre professionnel de niveau III", "Pixem Institut Reims", ["2016", "2015"], ["Retouche photos", "Maquettes", "Création de logos", "Intégration Web", "Utitlisation de Jquery et de CMS"], ["Photoshop", "Illustrator", "InDesign", "Flash", "Html", "Css", "WordPress", "Bootstrap"])
    ]
  }

  getXps() {
    return this.xps;
  }

  getEducation() {
    return this.education;
  }
}
