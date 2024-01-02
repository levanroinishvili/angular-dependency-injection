import { NgIf } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'di-child',
  standalone: true,
  imports: [NgIf, forwardRef(() => ParentComponent)],
  template: `
    <p>child works!</p>
    @if (!hideParent) {
      <di-parent [hideParent]="!hideParent" />
    }
  `,
  styles: `:host {margin: 16px; border: thin dashed grey; padding: 8px;display: grid; grid-auto-flow: row; row-gap: 8px;}`,
})
export class ChildComponent {
  @Input() hideParent?: boolean;
}
