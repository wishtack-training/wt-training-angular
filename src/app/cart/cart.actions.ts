import { createAction, props } from '@ngrx/store';
import { Sandwich } from './sandwich';

export const addSandwich = createAction(
    '[Cart] Add sandwich',
    props<{ sandwich: Sandwich }>()
);
