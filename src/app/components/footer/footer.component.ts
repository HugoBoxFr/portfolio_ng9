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

  socialLinks = [
    { name: "Github", link: "https://github.com/HugoBoxFr", logo: "github" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/hugo-prea", logo: "linkedin-in" },
    { name: "Twitter", link: "https://www.twitter.com/prea_hugo", logo: "twitter" }
  ];

  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
}
