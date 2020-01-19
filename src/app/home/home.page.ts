import { Component } from '@angular/core';
import { GroceryItem } from '../../models/grocery-item';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ITEMS = [
    {
      name: 'Apples',
      amount: 1,
      isDone: false
    },
    {
      name: 'Bananas',
      amount: 2,
      isDone: true
    }
  ];
  groceryItems: GroceryItem[] = [];
  isEditing = false;

  constructor() {
    this.groceryItems = this.ITEMS;
  }

  addItem() {
    console.log('Adding grocery item');
    const item = {
      name: 'New Item',
      amount: 1,
      isDone: false
    };
    this.groceryItems.push(item);
  }
  updateItem() {
    console.log('Updating grocery item');
    this.isEditing = false;
  }
  deleteItem() {
    console.log('Deleting grocery item');
    this.isEditing = true;
  }
}
