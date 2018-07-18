import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DYNAMIC_COMPONENT_MAPPING } from '../../lib/dynamic-component-mapping';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TransactionsComponent
    ],
    entryComponents: [
        TransactionsComponent
    ],
    providers: [
        {
            provide: DYNAMIC_COMPONENT_MAPPING,
            useValue: {
                'transactions': TransactionsComponent
            }
        }
    ]
})
export class BankAModule {
}
