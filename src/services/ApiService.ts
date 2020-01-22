import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroceryItem } from '../app/store/models/grocery-item';

@Injectable()
export class ApiService {
    HOST = 'http://localhost:8080';
    BASE_URL = '/grocery-list';
    ITEMS_URL = '/items';
    OPTIONS = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    constructor(private http: HttpClient) { }

    getGroceryItems() {
        return this.http.get(this.HOST + this.BASE_URL + this.ITEMS_URL, this.OPTIONS);
    }

    addGroceryItem(item: GroceryItem) {
        return this.http.post(this.HOST + this.BASE_URL + this.ITEMS_URL, item, this.OPTIONS);
    }
    updateGroceryItem(item: GroceryItem) {
        return this.http.put(this.HOST + this.BASE_URL + this.ITEMS_URL, item, this.OPTIONS);
    }
    deleteGroceryItem(id: string) {
        return this.http.delete(this.HOST + this.BASE_URL + this.ITEMS_URL + '/' + id, this.OPTIONS);
    }
}
