import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CounterState } from './counter/state/counter.state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private store: Store<CounterState>) {}
  name = 'Angular ' + VERSION.major;
}
