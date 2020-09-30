import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from './service/transaction.service';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { TransactionEffects } from './store/effects';
import { TransactionComponent } from './component/transaction/transaction.component';

@NgModule({
  declarations: [TransactionComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('myReducer', reducer ),
    EffectsModule.forRoot([ TransactionEffects ]),
  ],
  providers: [ TransactionService ],
  exports: [ TransactionComponent]
})
export class TransactionsModule { }
