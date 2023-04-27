import { Component, OnInit } from '@angular/core';
import { Document, gridTheme } from './course.interface';
import { gridThemesContent } from './gridThemesContent';
import { RequestApiService } from './request-api.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  lastEditedDocs!: Document[];
  gridThemes: gridTheme[] = gridThemesContent;

  constructor(private api: RequestApiService) {}

  ngOnInit() {
    this.api.getLatestDocsEdit().subscribe((data) => {
      this.lastEditedDocs = data.data as Document[];
      this.gridThemes[0].docs = this.lastEditedDocs;
    });
  }
}
