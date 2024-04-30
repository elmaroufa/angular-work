import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
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
  private setTitle = () => {
    const timestamp = new Date().getMilliseconds();
    this.title = `Learning Angular (${timestamp})`;
    console.log(this.title);
  }
  title$ =  new Observable(observer => {
      setInterval(() => {
        observer.next()
      }, 2000);
    });
  

  constructor(@Inject(APP_CONFIG) config: AppConfig)
  {
    //this.title$.subscribe(this.setTitle);
  }
}
