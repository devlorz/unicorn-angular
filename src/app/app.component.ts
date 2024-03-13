import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileListComponent } from './file-list/file-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FileListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'unicorn';
}
