import { GroceryListState } from '../reducers/grocery-list.reducer';

export interface AppState {
    readonly groceryList: GroceryListState;
}
