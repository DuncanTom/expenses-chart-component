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

  getSpendingFactor(inSpendingVal: number) : number {
    const maxSpending = Math.max(...this.spendings.map(o => o.amount));
    return inSpendingVal / maxSpending;
  }
  getSpendingBarHeight(inSpendingVal: number) : string {
    const spendingFactor = this.getSpendingFactor(inSpendingVal);
    return `calc(150px*${spendingFactor})`;
  }

  getSpendingValPos(inSpendingVal: number) : string {
    const spendingFactor = this.getSpendingFactor(inSpendingVal);
    return `calc(92px + 150px*(1 - ${spendingFactor}))`;
  }

  isCurrentDay(inDayStr: string) : boolean {
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const now = new Date();
    const nowName = days[now.getDay()];
    return (nowName === inDayStr);
  }
}
