import { Component } from '@angular/core';
import { FileComponent } from '../file/file.component';

@Component({
  selector: 'file-list',
  standalone: true,
  imports: [FileComponent],
  template: `
    <ul>
      <li><file-item [fileName]="'File one'" [href]="'/file/file_one'" /></li>
      <li><file-item [fileName]="'File two'" [href]="'/file/file_two'" /></li>
      <li>
        <file-item [fileName]="'File three'" [href]="'/file/file_three'" />
      </li>
    </ul>
  `,
  styleUrl: './file-list.component.scss',
})
export class FileListComponent {}
