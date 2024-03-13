import { Component } from '@angular/core';
import { FileDateComponent } from '../file-date/file-date.component';

@Component({
  selector: 'file-item',
  standalone: true,
  imports: [FileDateComponent],
  template: `
    <div>
      <a href="/file/file_one">File one<file-date /></a>
    </div>
  `,
  styleUrl: './file.component.scss',
})
export class FileComponent {}
