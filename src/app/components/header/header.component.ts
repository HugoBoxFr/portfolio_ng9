import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  options = {
    strings: ['Hugo Prea', 'Développeur Web', 'Infographiste', "disponible."],
    typeSpeed: 100,
    backSpeed: 100,
    showCursor: true,
    cursorChar: '|',
    loop: true
  };

  typed: any;

  constructor() { }

  ngOnInit(): void {
    this.typed = new Typed('.typed-element', this.options);
  }

}
