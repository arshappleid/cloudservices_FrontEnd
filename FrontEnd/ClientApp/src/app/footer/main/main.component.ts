import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'footer',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  info = {
      companyName : environment.companyName,
      companyAddress:"Arlington , VA , US",
      companyPhoneNumber:"780 935 1322"
  }
}
