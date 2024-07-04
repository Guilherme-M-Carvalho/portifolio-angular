import { Component } from '@angular/core';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [SocialMediaComponent],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss'
})
export class TopComponent {
}