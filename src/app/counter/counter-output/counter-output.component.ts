import { CounterState } from './../state/counter.state';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  //counter$: Observable<number>;
  counter: number;
  counter$: Observable<{ counter: number }>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.counter = data.counter;
      console.log('counter changes');
    });
    this.counter$ = this.store.select('counter');
  }
}
