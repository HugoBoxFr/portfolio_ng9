import { Component, OnInit } from '@angular/core';
import { Resume } from 'src/app/models/resume';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  xps: Resume[];

  constructor(
    private resumeService: ResumeService
  ) { }

  ngOnInit(): void {
    this.xps = this.resumeService.getXps();
  }

}
