import { Component } from '@angular/core';

@Component({
  selector: 'app-health-check',
  template: `<pre>{{ healthStatus | json }}</pre>`,
})
export class HealthCheckComponent {
  healthStatus = {
    status: 'UP',
    timestamp: new Date().toISOString(),
    application: 'cloud-services-angular-app',
  };
}
