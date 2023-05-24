import { Component } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ecommerce-product-page';

  numOfItems = 0;

  ItemsRemoveCount = 0;

  public addItems(num: number) {
    this.numOfItems = num;
  }

  public deleteItems(removeCount: number) {
    this.ItemsRemoveCount += removeCount;
  }
}
