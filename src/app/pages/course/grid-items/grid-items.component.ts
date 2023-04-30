import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { iconsGrid } from 'src/assets/images';
import { gridTheme } from '../course.interface';

@Component({
  selector: 'app-grid-items',
  templateUrl: './grid-items.component.html',
  styleUrls: ['./grid-items.component.css'],
})
export class GridItemsComponent {
  @Input() theme!: gridTheme;
  @Input() order!: number;
  icons = iconsGrid;

  constructor(private route: Router) {}

  reDirect() {
    if (this.theme.type === 'yt') {
      window.open(this.theme.viewMore.url.toString(), '_blank');
    } else this.route.navigate([this.theme.viewMore.url]);
  }
}
