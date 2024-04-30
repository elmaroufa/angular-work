import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { fromEvent, tap, map, filter } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrl: './key-logger.component.scss'
})
export class KeyLoggerComponent implements OnInit {
  
  @ViewChild('keyContainer', { static: true }) input: ElementRef | undefined;
  keys = '';
  @Input() numeric = true;

  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(this.input?.nativeElement, 'keyup');
    logger$.pipe(
    map(evt => evt.key.charCodeAt(0)),
    filter(code => {
      if (this.numeric) {
        return (code > 31 && (code < 48 || code > 57)) === false;
      }
      return true;
    }),
    tap(digit => this.keys += String.fromCharCode(digit))
    ).subscribe();
  }

}
