import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private skills: Skill[];

  constructor() {
    this.skills = [
      new Skill(1, "Angular 9", 4, "angular-icon.svg"),
      new Skill(2, "NodeJs", 3, "nodejs.svg"),
      new Skill(3, "ReactJs", 2, "react.svg"),
      new Skill(4, "Typescript", 4, "typescript.svg"),
      new Skill(5, "Javascript", 3, "javascript.svg"),
      new Skill(6, "Php", 2, "php.svg"),
      new Skill(7, "Html5", 4, "html-5.svg"),
      new Skill(8, "Css3", 4, "css3.svg"),
      new Skill(9, "Bootstrap", 4, "bootstrap.svg"),
      new Skill(10, "mySql", 3, "mysql-5.svg")
    ];
  }

  getSkills(): Skill[] {
    return this.skills;
  }
}
