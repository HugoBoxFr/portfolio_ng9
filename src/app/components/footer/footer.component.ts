import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

window.addEventListener("scroll", function() {
  const footer = document.getElementById('footer');
  footer.classList.toggle("sticky", window.scrollY > 110);
});

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  year: number;
  hide: boolean = true;

  socialLinks = [
    { name: "Github", link: "", logo: "github" },
    { name: "LinkedIn", link: "", logo: "linkedin-in" },
    { name: "Twitter", link: "", logo: "twitter" }
  ];

  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();

    if (window.innerWidth < 500) {
      this.hide = false;
    }
  }
}
