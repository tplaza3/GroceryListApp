import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroceryItem } from '../app/store/models/grocery-item';

@Injectable()
export class ApiService {
    HOST = 'http://localhost:8080';
    URL = '/grocery-list/items';
    OPTIONS = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    constructor(private http: HttpClient) { }

    getGroceryItems() {
        return this.http.get(this.HOST + this.URL, this.OPTIONS);
    }

    addGroceryItem(item: GroceryItem) {
        return this.http.post(this.HOST + this.URL, item, this.OPTIONS);
    }
    updateGroceryItem(item: GroceryItem) {
        return this.http.put(this.HOST + this.URL, item, this.OPTIONS);
    }
    deleteGroceryItem(id: string) {
        return this.http.delete(this.HOST + this.URL + '/' + id);
    }
}
