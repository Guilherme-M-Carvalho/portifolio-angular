import { Component } from '@angular/core';
import { SocialMedia } from '../shared/social-media.model';
import { SOCIALMEDIA } from '../shared/mock/social-media.mock';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {

  public socialMedia: SocialMedia[] = SOCIALMEDIA
}
