import { Transaction } from "../model/transaction.model";
import { Action } from '@ngrx/store';


export enum TransactionActionTypes {
    LOAD_START = '[Transaction] loading',
    LOAD_SUCCESS = '[Transaction] loading success',
    LOAD_ERROR = '[Transaction loading error'
}

export class LoadTransactionAction implements Action {
    readonly type = TransactionActionTypes.LOAD_START;

    constructor(public payload: { 
        loading: boolean
    }) { }
}

export class LoadTransactionSuccessAction implements Action {
    readonly type = TransactionActionTypes.LOAD_SUCCESS;

    constructor(public payload: { 
        loading: boolean,
        transactionsData: Transaction[] 
    }) { }
}

export  type TransactionActionUnion = LoadTransactionAction | LoadTransactionSuccessAction;