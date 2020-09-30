import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadTransactionAction } from '../../store/actions';
import { getTransactions, getLoading } from '../../store/selectors';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  ngOnInit(): void {
    this.store.dispatch(new LoadTransactionAction({
      loading: true
    }))
  }

  loadingTransactions$ = this.store.select(getLoading);
  transactions$ = this.store.select(getTransactions);


  constructor(private store: Store<any>) { }
}
