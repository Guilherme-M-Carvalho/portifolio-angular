import { Component, OnInit } from '@angular/core';
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
export class ExperienceComponent implements OnInit {

  public experiences: Experience[] = EXPERIENCES
  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;
  startDate = new Date('2021-10-01');
  experienceLabel!: string;


  ngOnInit(): void {
    this.experienceLabel = this.calculateExperience();
  }

  handleToggle(index: number) {
    this.experiences[index].hide = !this.experiences[index]?.hide;
  }

  private calculateExperience(): string {
    const today = new Date();

    let years = today.getFullYear() - this.startDate.getFullYear();
    let months = today.getMonth() - this.startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return `"${years}+ anos"`;
  }
}
