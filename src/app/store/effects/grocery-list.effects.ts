import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {
    LoadGroceryListAction,
    GroceryListActionTypes,
    LoadGroceryListSuccessAction,
    LoadGroceryListFailureAction,
    AddItemAction,
    AddItemSuccessAction,
    AddItemFailureAction,
    DeleteItemAction,
    DeleteItemSuccessAction,
    UpdateItemSuccessAction,
    UpdateItemFailureAction,
    UpdateItemAction
}
    from '../actions/grocery-list.actions';
import { of } from 'rxjs';
import { ApiService } from '../../../services/ApiService';
import { GroceryItem } from '../models/grocery-item';

@Injectable()
export class GroceryListEffects {

    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) { }

    @Effect() loadGroceryList$ = this.actions$
        .pipe(
            ofType<LoadGroceryListAction>(GroceryListActionTypes.LOAD_GROCERY_LIST),
            mergeMap(
                () => this.apiService.getGroceryItems()
                    .pipe(
                        map((data: GroceryItem[]) => {
                            return new LoadGroceryListSuccessAction(data);
                        }),
                        catchError(error =>
                            of(new LoadGroceryListFailureAction(error))
                        )
                    )
            ),
        );

    @Effect() addGroceryListItem$ = this.actions$
        .pipe(
            ofType<AddItemAction>(GroceryListActionTypes.ADD_ITEM),
            mergeMap(
                (data) => this.apiService.addGroceryItem(data.payload)
                    .pipe(
                        map(() => new AddItemSuccessAction(data.payload)),
                        catchError(error => of(new AddItemFailureAction(error)))
                    )
            )
        );

    @Effect() deleteGroceryListItem$ = this.actions$
        .pipe(
            ofType<DeleteItemAction>(GroceryListActionTypes.DELETE_ITEM),
            mergeMap(
                (data) => this.apiService.deleteGroceryItem(data.payload)
                    .pipe(
                        map(() => new DeleteItemSuccessAction(data.payload)),
                        catchError(error => of(new AddItemFailureAction(error)))
                    )
            )
        );

    @Effect() updateGroceryListItem$ = this.actions$
        .pipe(
            ofType<UpdateItemAction>(GroceryListActionTypes.UPDATE_ITEM),
            mergeMap(
                (data) => this.apiService.updateGroceryItem(data.payload)
                    .pipe(
                        map(() => new UpdateItemSuccessAction(data.payload)),
                        catchError(error => of(new UpdateItemFailureAction(error)))
                    )
            )
        );

}
