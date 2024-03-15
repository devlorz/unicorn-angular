import { Component, input, output } from '@angular/core';
import { FileDateComponent } from '../file-date/file-date.component';

@Component({
  selector: 'file-item',
  standalone: true,
  imports: [FileDateComponent],
  template: `
    <button
      (click)="selected.emit({})"
      [style]="
        isSelected()
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
  isSelected = input.required<boolean>();
  selected = output<Object>();
  inputDate = new Date();

  // selectFile() {
  //   this.isSelected = !this.isSelected;
  // }
}
