import { Component, Input } from '@angular/core';
import { Document } from '../course.interface';

@Component({
  selector: 'app-item-render',
  templateUrl: './item-render.component.html',
  styleUrls: ['./item-render.component.css'],
})
export class ItemRenderComponent {
  @Input() doc!: Document;
}
