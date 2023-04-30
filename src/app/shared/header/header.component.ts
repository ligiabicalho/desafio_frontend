import { formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';
import { iconsHeader } from 'src/assets/images';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() mode = 'dark';
  icons = iconsHeader;

  transformDate() {
    const date = new Date().toLocaleDateString();
    const format = 'dd/MM/yyyy';
    const locale = 'en-US';
    const formattedDate = formatDate(date, format, locale);
    return formattedDate;
  }
}
