import { Component } from '@angular/core';
import spendingsData from './../../assets/data.json';

interface Spendings {
  day: string;
  amount: number;
}

@Component({
  selector: 'app-spendings',
  templateUrl: './spendings.component.html',
  styleUrls: ['./spendings.component.less']
})
export class SpendingsComponent {
  spendings: Array<Spendings> = spendingsData;

  isCurrentDay(inDayStr: string): boolean {
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const now = new Date();
    const nowName = days[now.getDay()];
    return (nowName === inDayStr);
  }
}
