import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { gridTheme } from '../course.interface';

@Component({
  selector: 'app-grid-items',
  templateUrl: './grid-items.component.html',
  styleUrls: ['./grid-items.component.css'],
})
export class GridItemsComponent {
  @Input() theme!: gridTheme;

  constructor(private route: Router) {}

  reDirect() {
    if (this.theme.videos) {
      window.open(this.theme.viewMore.url.toString(), '_blank');
    } else this.route.navigate([this.theme.viewMore.url]);
  }
}
