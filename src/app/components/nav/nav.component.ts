import { Component, OnInit } from '@angular/core';

window.addEventListener("scroll", function() {
  const nav = document.getElementById('menu');
  const header = document.getElementById('home').scrollHeight;
  if (window.scrollY > 0) {
    nav.classList.add("sticky");
  } else if (window.scrollY === 0) {
    nav.classList.remove("sticky");
  } 

  if (window.scrollY < 50) {
    nav.classList.add("fixed-bottom");
    nav.classList.remove("sticky-top");
  } else {
    nav.classList.remove("fixed-bottom");
  }

  if (window.scrollY > header - 50) {
    nav.classList.add("sticky-top");
  }
});


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hideNav() {
    let navContent = document.getElementById('nav-content');
    navContent.classList.remove('show');
  }

}
