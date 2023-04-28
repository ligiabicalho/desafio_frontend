import { formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';
import { icons } from 'src/app/shared/header/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() themeDark = true;
  icons = icons;

  transformDate() {
    const date = new Date().toLocaleDateString();
    const format = 'dd/MM/yyyy';
    const locale = 'en-US';
    const formattedDate = formatDate(date, format, locale);
    return formattedDate;
  }
}
