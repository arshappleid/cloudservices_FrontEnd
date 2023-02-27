import { Input, Component } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {

  @Input() max_length: number | 100 | undefined; // how many chars we want to allow.
  @Input() label: string | undefined;
  @Input() placeholder: string = "Enter a value";
  @Input() formControlName: any;
}
