import { Component } from '@angular/core';
import { GroceryItem } from '../../models/grocery-item';
import { ApiService } from '../../services/ApiService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  groceryItems: GroceryItem[];
  isEditing = false;

  constructor(private apiService: ApiService) {

  }

  ionViewWillEnter() {
    this.setGroceryItems();
  }

  addItem() {
    console.log('Adding grocery item');
    const item = {
      name: 'New Item',
      amount: 1,
      isDone: false
    };
    this.apiService.addGroceryItem(item).subscribe((data) => {
      console.log('success ', JSON.stringify(data));
      this.setGroceryItems();
    }, error => {
      console.error(error);
    });

  }
  updateItem() {
    console.log('Updating grocery item');
    this.isEditing = false;
  }
  deleteItem() {
    console.log('Deleting grocery item');
    this.isEditing = true;
  }

  setGroceryItems() {
    this.apiService.getGroceryItems().subscribe((data: GroceryItem[]) => {
      console.log(JSON.stringify(data));
      this.groceryItems = data;
    }, error => {
      console.error(error);
    });
  }
}
