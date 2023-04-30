import { Component, Input } from '@angular/core';
import { bannerInputs } from 'src/app/interfaces';
import { bannerCourse } from 'src/assets/images';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  @Input() infos: bannerInputs = bannerCourse;
  imgs = this.infos.src;
  alt = this.infos.alt;
}
