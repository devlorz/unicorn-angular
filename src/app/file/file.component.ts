import { Component, input } from '@angular/core';
import { FileDateComponent } from '../file-date/file-date.component';

@Component({
  selector: 'file-item',
  standalone: true,
  imports: [FileDateComponent],
  template: `
    <button
      (click)="selectFile()"
      [style]="
        isSelected
          ? 'background-color: blue; color: white'
          : 'background-color: white; color: blue'
      "
    >
      {{ fileName() }}
      <file-date [inputDate]="inputDate" />
    </button>
  `,
  styleUrl: './file.component.scss',
})
export class FileComponent {
  fileName = input.required<string>();
  href = input.required<string>();
  inputDate = new Date();
  isSelected = false;

  selectFile() {
    this.isSelected = !this.isSelected;
  }
}
