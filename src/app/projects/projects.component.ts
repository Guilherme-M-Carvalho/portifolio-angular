import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SliderTechsComponent } from '../slider-techs/slider-techs.component';
import { Tech } from '../shared/tech.model';
import { TECHSCARV } from '../shared/mock/techs-carv.mock';
import { Project } from '../shared/project.model';
import { PROJECTS } from '../shared/mock/projects.mock';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FontAwesomeModule, SliderTechsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  faEarthAmericas = faEarthAmericas;
  faGithub = faGithub;

  projects: Project[] = [
    ...PROJECTS
  ]

  techs: Tech[] = [...TECHSCARV, ...TECHSCARV, ...TECHSCARV, ...TECHSCARV]
}
