import { Injectable } from "@angular/core";
import { TransactionService } from "../service/transaction.service";
import { TransactionActionTypes, TransactionActionUnion, LoadTransactionAction, LoadTransactionSuccessAction } from './actions';
import { switchMap,map } from "rxjs/operators";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Transaction } from "../model/transaction.model";

@Injectable()
export class TransactionEffects {

    @Effect()
    loadTransactions$ = this.actions$
        .pipe(
            ofType<LoadTransactionAction>(TransactionActionTypes.LOAD_START),
            map((action: LoadTransactionAction) => action.payload),
            switchMap(() => this.transactionService.getTransactions()),
            map((transactionsData: Transaction[]) => 
                    new LoadTransactionSuccessAction({ 
                        loading: false,
                        transactionsData: transactionsData }
                    ))
        );

    constructor(private actions$: Actions,
                private transactionService: TransactionService) { }
}