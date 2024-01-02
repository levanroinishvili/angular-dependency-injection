import { Component, Input } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'di-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `<p>Parent</p>
    <di-child [hideParent]="hideParent" />`,
  styles: `:host {margin: 16px; border: thin dashed grey; padding: 8px;display: grid; grid-auto-flow: row; row-gap: 8px;}`,
})
export class ParentComponent {
  @Input() hideParent?: boolean;
}
