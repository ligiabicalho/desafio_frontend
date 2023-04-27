import { Component, OnInit } from '@angular/core';
import { Document } from '../course.interface';
import { RequestApiService } from '../request-api.service';

@Component({
  selector: 'app-view-all-content',
  templateUrl: './view-all-content.component.html',
  styleUrls: ['./view-all-content.component.css'],
})
export class ViewAllContentComponent implements OnInit {
  allDocs!: Document[];

  constructor(private api: RequestApiService) {}

  ngOnInit(): void {
    this.api.getAll().subscribe((result) => {
      this.allDocs = result.data;
      console.log('result:', result, 'all:', this.allDocs);
    });
  }
}
