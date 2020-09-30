import { TransactionActionUnion, TransactionActionTypes  } from './actions';
import { Transaction } from '../model/transaction.model';

export interface State {
    loading: boolean;
    transactions: Transaction [];
}

const initialState: State = {
    loading: false,
    transactions: []
}

export function reducer(state = initialState, action: TransactionActionUnion) : State {
    switch(action.type) {

        case TransactionActionTypes.LOAD_START: {
            return {
                ...state,
                loading: action.payload.loading,
                transactions: []
            }
        }
        case TransactionActionTypes.LOAD_SUCCESS: {
            return {
                ...state,
                loading: action.payload.loading,
                transactions: action.payload.transactionsData
            }
        }

        default: {
            return state;
        }
    }
}