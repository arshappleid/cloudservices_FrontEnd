import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  template: `
    <span *ngFor="let char of textarr; let i = index">
      <span
        [style.opacity]="opacity[i]"
        [style.transition-duration]="transitionDuration"
        style = "font-family:Roboto; font-size : 1.5rem;"
        >{{ char }}</span>
    </span>
  `
})
export class TypewriterComponent {
  @Input() text: string;
  textarr: string[];
  @Input() delay: string = "100";
  @Input() transitionDuration: string = '0.5s';

  opacity: number[] = [];

  ngOnInit() {
    // Initialize opacity array
    this.textarr = this.text.split('');
    for (let i = 0; i < this.textarr.length; i++) {
      this.opacity.push(0);
    }

    // Animate text
    for (let i = 0; i < this.textarr.length; i++) {
      setTimeout(() => {
        this.opacity[i] = 1;
      }, i * Number(this.delay));
    }
  }
}
