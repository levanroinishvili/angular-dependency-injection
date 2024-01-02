import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'di-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
