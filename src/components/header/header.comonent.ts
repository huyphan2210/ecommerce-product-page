import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, OnChanges } from "@angular/core";

@Component({
  selector: 'header',
  styleUrls: ['./header.component.sass'],
  templateUrl: './header.component.html'
})

export class Header implements OnChanges {
  @ViewChild('nav') nav?: ElementRef<HTMLElement>;

  @ViewChild('cartItems') cartItems?: ElementRef<HTMLDivElement>;

  @Input('numOfItems') numOfItems: number = 0;

  @Output('deleteItemsEvent') deleteItemsEvent: EventEmitter<number> = new EventEmitter();

  count = 0;

  cartItemsNumber = this.numOfItems;

  navigations = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  ngOnChanges(): void {
    this.cartItemsNumber = this.numOfItems;
  }

  public openMenu():void {
    this.nav?.nativeElement.setAttribute('style', 'visibility: visible;');
    setTimeout(() => {
      this.nav?.nativeElement.getElementsByTagName('ul')[0].setAttribute('style', 'transform: none;');
    }, 0)
  }

  public closeMenu():void {
    this.nav?.nativeElement.getElementsByTagName('ul')[0].setAttribute('style', '');
    setTimeout(() => {
      this.nav?.nativeElement.setAttribute('style', '');
    }, 1000)
  }

  public handleCart() {
    if (this.cartItems) {
      if (!this.cartItems.nativeElement.style.visibility) {
        this.cartItems.nativeElement.style.visibility = 'visible';
      } else {
        this.cartItems.nativeElement.style.visibility = '';
      }
    }
  }

  public deleteItems() {
    this.count += 1;
    this.deleteItemsEvent.emit(this.count);
    this.cartItemsNumber = 0;
  }
}
