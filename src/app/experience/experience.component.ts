import { Component } from '@angular/core';
import { Experience } from '../shared/experience.model';
import { EXPERIENCES } from '../shared/mock/experiences.mock';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public experiences: Experience[] = EXPERIENCES
  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;

  handleToggle(index: number) {
    this.experiences[index].hide = !this.experiences[index]?.hide;
  }
}
