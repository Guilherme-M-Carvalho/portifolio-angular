import { Component, Input, OnInit } from '@angular/core';
import { Tech } from '../shared/tech.model';
import { TECHS } from '../shared/mock/techs.mock';

@Component({
  selector: 'app-slider-techs',
  standalone: true,
  imports: [],
  templateUrl: './slider-techs.component.html',
  styleUrl: './slider-techs.component.scss'
})
export class SliderTechsComponent implements OnInit {

  @Input() public techs: Tech[]= [...TECHS, ...TECHS]

  ngOnInit(): void {
  }
}
