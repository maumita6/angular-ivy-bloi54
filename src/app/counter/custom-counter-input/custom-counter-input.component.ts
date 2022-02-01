import { Component, OnInit } from '@angular/core';
import { CounterState } from './../state/counter.state';
import { Store } from '@ngrx/store';
import { changeChannelName, customIncrement } from './../state/counter.actions';
import { getCounter } from '../state/counter.selectors';
import { getChannelName } from './../state/counter.selectors';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  channelName: string;
  channelName$: Observable<string>;
  // constructor(private store: Store<{counter:CounterState}>) {}
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // this.store.select(getCounter).subscribe(this.channelName =>{
    //   console.log(this.channelName);
    //   console.log('channel name changes');
    //   this.channelName = this.channelName;
    //   //this.channelName =  data.channelName;
    // })
    this.channelName$ = this.store.select(getChannelName);
  }
  onAdd() {
    console.log(this.value);
    this.store.dispatch(customIncrement({ count: +this.value }));
  }
  onChangeChannelName() {
    this.store.dispatch(changeChannelName());
  }
}
