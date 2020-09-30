import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Transaction } from '../model/transaction.model';

@Injectable()
export class TransactionService {
    
    private baseUrl = "http://localhost:8082/transactions"

    constructor(private http: HttpClient) { }

    getTransactions() : Observable<Transaction[]> {
        return this.http.get<Transaction[]>(this.baseUrl).pipe(
            delay(3000)
        );
    }
}