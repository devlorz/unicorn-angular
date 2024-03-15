import { Component } from '@angular/core';
import { FileComponent } from '../file/file.component';

@Component({
  selector: 'file-list',
  standalone: true,
  imports: [FileComponent],
  template: `
    <ul>
      <li>
        <file-item
          [fileName]="'File one'"
          [href]="'/file/file_one'"
          [isSelected]="selectedIndex === 0"
          (selected)="onSelected(0)"
        />
      </li>
      <li>
        <file-item
          [fileName]="'File two'"
          [href]="'/file/file_two'"
          [isSelected]="selectedIndex === 1"
          (selected)="onSelected(1)"
        />
      </li>
      <li>
        <file-item
          [fileName]="'File three'"
          [href]="'/file/file_three'"
          [isSelected]="selectedIndex === 2"
          (selected)="onSelected(2)"
        />
      </li>
    </ul>
  `,
  styleUrl: './file-list.component.scss',
})
export class FileListComponent {
  selectedIndex = -1;

  onSelected(idx: number) {
    if (this.selectedIndex === idx) {
      this.selectedIndex = -1;
      return;
    }
    this.selectedIndex = idx;
  }
}
