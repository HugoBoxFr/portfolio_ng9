import { Component, OnInit } from '@angular/core';
import { Resume } from 'src/app/models/resume';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  formations: Resume[];

  constructor(
    private resumeService: ResumeService
  ) { }

  ngOnInit(): void {
    this.formations = this.resumeService.getEducation();
  }

}
