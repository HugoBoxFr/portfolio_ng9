import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

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


$(document).ready(function() {
  $(window).scroll(function() {
    const scrollPosition = $(window).scrollTop();
    const one = $("#home").offset().top, two = $("#about").offset().top - 70, three = $("#portfolio").offset().top - 70;
    const nav1 = $("#nav1"), nav2 = $("#nav2"), nav3 = $("#nav3");

    if (scrollPosition >= one) {
      nav1.siblings().removeClass("active");
      nav1.addClass("active");
    }
    if (scrollPosition >= two) {
      nav2.siblings().removeClass("active");
      nav2.addClass("active");
    }
    if (scrollPosition >= three) {
      nav3.siblings().removeClass("active");
      nav3.addClass("active");
    }
  })
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
