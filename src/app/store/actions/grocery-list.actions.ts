import { Action } from '@ngrx/store';
import { GroceryItem } from '../models/grocery-item';

export enum GroceryListActionTypes {
    LOAD_GROCERY_LIST = '[GROCERY_LIST] Load Grocery List',
    LOAD_GROCERY_LIST_SUCCESS = '[GROCERY_LIST] Load Grocery List Success',
    LOAD_GROCERY_LIST_FAILURE = '[GROCERY_LIST] Load Grocery List Failure',
    ADD_ITEM = '[GROCERY_LIST] Add Item',
    ADD_ITEM_SUCCESS = '[GROCERY_LIST] Add Item Success',
    ADD_ITEM_FAILURE = '[GROCERY_LIST] Add Item Failure',
    DELETE_ITEM = '[GROCERY_LIST] Delete Item',
    DELETE_ITEM_SUCCESS = '[GROCERY_LIST] Delete Item Success',
    DELETE_ITEM_FAILURE = '[GROCERY_LIST] Delete Item Failure',
    UPDATE_ITEM = '[GROCERY_LIST] Update Item',
    UPDATE_ITEM_SUCCESS = '[GROCERY_LIST] Update Item Success',
    UPDATE_ITEM_FAILURE = '[GROCERY_LIST] Update Item Failure',
}

export class LoadGroceryListAction implements Action {
    readonly type = GroceryListActionTypes.LOAD_GROCERY_LIST;
}
export class LoadGroceryListSuccessAction implements Action {
    readonly type = GroceryListActionTypes.LOAD_GROCERY_LIST_SUCCESS;

    constructor(public payload: Array<GroceryItem>) {}
}
export class LoadGroceryListFailureAction implements Action {
    readonly type = GroceryListActionTypes.LOAD_GROCERY_LIST_FAILURE;

    constructor(public payload: string) {}
}

export class AddItemAction implements Action {
    readonly type = GroceryListActionTypes.ADD_ITEM;

    constructor(public payload: GroceryItem) { }
}
export class AddItemSuccessAction implements Action {
    readonly type = GroceryListActionTypes.ADD_ITEM_SUCCESS;

    constructor(public payload: GroceryItem) { }
}
export class AddItemFailureAction implements Action {
    readonly type = GroceryListActionTypes.ADD_ITEM_FAILURE;

    constructor(public payload: Error) { }
}

export class DeleteItemAction implements Action {
    readonly type = GroceryListActionTypes.DELETE_ITEM;

    constructor(public payload: string) { }
}

export class DeleteItemSuccessAction implements Action {
    readonly type = GroceryListActionTypes.DELETE_ITEM_SUCCESS;

    constructor(public payload: string) { }
}
export class DeleteItemFailureAction implements Action {
    readonly type = GroceryListActionTypes.DELETE_ITEM_FAILURE;

    constructor(public payload: string) { }
}

export class UpdateItemAction implements Action {
    readonly type = GroceryListActionTypes.UPDATE_ITEM;

    constructor(public payload: GroceryItem) { }
}
export class UpdateItemSuccessAction implements Action {
    readonly type = GroceryListActionTypes.UPDATE_ITEM_SUCCESS;

    constructor(public payload: GroceryItem) { }
}
export class UpdateItemFailureAction implements Action {
    readonly type = GroceryListActionTypes.UPDATE_ITEM_FAILURE;

    constructor(public payload: Error) { }
}

export type GroceryListAction = AddItemAction |
    AddItemSuccessAction |
    AddItemFailureAction |
    DeleteItemAction |
    DeleteItemSuccessAction |
    DeleteItemFailureAction |
    LoadGroceryListAction |
    LoadGroceryListFailureAction |
    LoadGroceryListSuccessAction |
    UpdateItemAction |
    UpdateItemSuccessAction |
    UpdateItemFailureAction;
