import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from "jquery";
import { FormGroup, FormBuilder } from'@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

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
    const one = $("#home").offset().top, two = $("#about").offset().top - 70, three = $("#resume").offset().top - 70, four = $("#portfolio").offset().top - 70;
    const nav1 = $("#nav1"), nav2 = $("#nav2"), nav3 = $("#nav3"), nav4 = $("#nav4");

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
    if (scrollPosition >= four) {
      nav4.siblings().removeClass("active");
      nav4.addClass("active");
    }
  })
});


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  formMail: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  hideNav() {
    let navContent = document.getElementById('nav-content');
    navContent.classList.remove('show');
  }

  initializeForm(): void {
    this.formMail = this.fb.group({
      name: '',
      email: '',
      message: ''
    });
  }

  onSubmit():void {
    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', this.formMail.value.name)
      .append('email', this.formMail.value.email)
      .append('message', this.formMail.value.message);
      this.http.post('/', body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
        res => {
          console.log('test', res)
          setTimeout(() => {
            this.formMail.reset();
          }, 1000);
        }
      );
  }
}
