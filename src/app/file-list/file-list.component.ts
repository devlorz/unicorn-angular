import { Component } from '@angular/core';
import { FileComponent } from '../file/file.component';

@Component({
  selector: 'file-list',
  standalone: true,
  imports: [FileComponent],
  template: `
    <ul>
      <li><file-item /></li>
      <li><file-item /></li>
      <li><file-item /></li>
    </ul>
  `,
  styleUrl: './file-list.component.scss',
})
export class FileListComponent {}
