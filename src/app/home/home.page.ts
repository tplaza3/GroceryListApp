import { Component, OnInit } from '@angular/core';
import { GroceryItem } from '../store/models/grocery-item';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state';
import { AddItemAction, DeleteItemAction, LoadGroceryListAction, UpdateItemAction } from '../store/actions/grocery-list.actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  groceryItems: Observable<Array<GroceryItem>>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;
  newItem: GroceryItem = {
    id: null,
    name: '',
    amount: null,
    done: false
  };
  emptyList: boolean;

  constructor(private store: Store<AppState>) {}

  ionViewWillEnter() {
    this.groceryItems = this.store.select(store => store.groceryList.list);
    this.loading$ = this.store.select(store => store.groceryList.loading);
    this.error$ = this.store.select(store => store.groceryList.error);

    // check for empty list to display initial message to user
    this.groceryItems.subscribe((data) => {
      this.emptyList = (data.length === 0);
    });
    this.store.dispatch(new LoadGroceryListAction());
  }

  addItem() {
    console.log('Adding grocery item');
    this.newItem.id = uuid();
    console.log(this.newItem.id);
    this.store.dispatch(new AddItemAction(this.newItem));
    this.newItem = {
      id: null,
      name: '',
      amount: null,
      done: false
    };
  }
  updateItem(item: GroceryItem, value: any, field: string) {
    console.log('Updating grocery item');

    if (field === 'name') {
      item.name = value;
    } else if (field === 'amount') {
      item.amount = value;
    } else if (field === 'done') {
      item.done = value;
    }
    this.store.dispatch(new UpdateItemAction(item));
  }
  deleteItem(id: string) {
    console.log('Deleting grocery item ' + id);
    this.store.dispatch(new DeleteItemAction(id));
  }

}
