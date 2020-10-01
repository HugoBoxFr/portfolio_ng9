import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  Arr = Array;

  skillsOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3500,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 15,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 7
      }
    },
    nav: true
  };

  constructor(
    private skillService: SkillService
  ) { }

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
  }

}
