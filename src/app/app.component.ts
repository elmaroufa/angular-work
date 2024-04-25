import { Component, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig, appSettings } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    { provide: APP_CONFIG, useValue: appSettings}
  ]
})
export class AppComponent {
  title = 'projet_learning';

  constructor(@Inject(APP_CONFIG) config: AppConfig){}
}
