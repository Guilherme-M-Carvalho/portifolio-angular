import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopComponent } from './top/top.component';
import { SliderTechsComponent } from './slider-techs/slider-techs.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopComponent, SliderTechsComponent, ExperienceComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'front';

  ngOnInit(): void {

  }
}
