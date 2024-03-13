import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'file-date',
  standalone: true,
  imports: [],
  templateUrl: './file-date.component.html',
  styleUrl: './file-date.component.scss',
})
export class FileDateComponent {
  inputDate = input.required<Date>();
  dateStr = computed(() => this.formatDate(this.inputDate()));
  labelText = computed(() => this.formatReadableDate(this.inputDate()));

  formatDate(inputDate: Date) {
    // Month starts at 0, annoyingly
    const monthNum = inputDate.getMonth() + 1;
    const dateNum = inputDate.getDate();
    const yearNum = inputDate.getFullYear();
    return monthNum + '/' + dateNum + '/' + yearNum;
  }

  dateSuffix(dayNumber: number) {
    const lastDigit = dayNumber % 10;
    if (lastDigit == 1 && dayNumber != 11) {
      return dayNumber + 'st';
    }
    if (lastDigit == 2 && dayNumber != 12) {
      return dayNumber + 'nd';
    }
    if (lastDigit == 3 && dayNumber != 13) {
      return dayNumber + 'rd';
    }
    return dayNumber + 'th';
  }

  formatReadableDate(inputDate: Date) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const monthStr = months[inputDate.getMonth()];
    const dateSuffixStr = this.dateSuffix(inputDate.getDate());
    const yearNum = inputDate.getFullYear();
    return monthStr + ' ' + dateSuffixStr + ',' + yearNum;
  }
}
