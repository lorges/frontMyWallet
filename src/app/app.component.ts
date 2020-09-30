import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLoading, getTransactions}  from './transactions/store/selectors';
import { LoadTransactionAction } from './transactions/store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myWallet';
}
