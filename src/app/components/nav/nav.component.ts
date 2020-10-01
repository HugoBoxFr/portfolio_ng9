import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import * as $ from "jquery";
import { FormGroup } from'@angular/forms';
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
  formValid: boolean = false;
  formInvalid: boolean = false;

  formMail = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  hideNav() {
    let navContent = document.getElementById('nav-content');
    navContent.classList.remove('show');
  }

  onSubmit() {
    const closeBtn = document.getElementById('close-btn');    
    const body = new HttpParams()
    .set('form-name', 'contact')
    .append('name', this.formMail.value.name)
    .append('email', this.formMail.value.email)
    .append('message', this.formMail.value.message)
    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
      res => {},
      err => {
        if (err instanceof ErrorEvent) {
          //client side error
          alert("Something went wrong when sending your message.");
          console.log(err.error.message);
        } else {
          //backend error. If status is 200, then the message successfully sent
          if (err.status === 200) {
            this.formValid = true;
            setTimeout(() => {
              closeBtn.dataset.dismiss = 'modal';
              this.formValid = false;
            }, 2000);
          } else {
            this.formInvalid = true;
            setTimeout(() => {
              this.formInvalid = false;
            }, 2000);
            console.log('Error status:');
            console.log(err.status);
            console.log('Error body:');
            console.log(err.error);
          };
        };
      }
    );
  };
}
