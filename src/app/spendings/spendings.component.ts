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

  getSpendingBarHeight(inSpendingVal: number) : string {
    const maxSpending = Math.max(...this.spendings.map(o => o.amount));
    const curSpendingFactor = inSpendingVal / maxSpending;
    return `calc(100%*${curSpendingFactor})`;
  }

  isCurrentDay(inDayStr: string) : boolean {
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const now = new Date();
    const nowName = days[now.getDay()];
    return (nowName === inDayStr);
  }
}
