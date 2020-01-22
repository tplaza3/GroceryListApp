import { GroceryListActionTypes, GroceryListAction } from '../actions/grocery-list.actions';
import { GroceryItem } from '../models/grocery-item';

export interface GroceryListState {
    list: GroceryItem[],
    loading: boolean,
    error: Error;
}

const initialState: GroceryListState = {
    list: [],
    loading: false,
    error: undefined
};

export function GroceryListReducer(state: GroceryListState = initialState, action: GroceryListAction) {
    switch (action.type) {
        case GroceryListActionTypes.LOAD_GROCERY_LIST:
            return {
                ...state,
                loading: true
            };
        case GroceryListActionTypes.LOAD_GROCERY_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            };

        case GroceryListActionTypes.LOAD_GROCERY_LIST_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case GroceryListActionTypes.ADD_ITEM:
            return {
                ...state,
                loading: true
            };
        case GroceryListActionTypes.ADD_ITEM_SUCCESS:
            return {
                ...state,
                list: [...state.list, action.payload],
                loading: false
            };
        case GroceryListActionTypes.ADD_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case GroceryListActionTypes.DELETE_ITEM:
            return {
                ...state,
                loading: true
            };
        case GroceryListActionTypes.DELETE_ITEM_SUCCESS:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload),
                loading: false
            };
        case GroceryListActionTypes.DELETE_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case GroceryListActionTypes.UPDATE_ITEM:
            return {
                ...state,
                loading: true
            };
        case GroceryListActionTypes.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                list: [...state.list, action.payload],
                loading: false
            };
        case GroceryListActionTypes.UPDATE_ITEM_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
