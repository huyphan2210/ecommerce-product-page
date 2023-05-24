import { Component, ViewChild, ElementRef, Input } from "@angular/core";

@Component({
  selector: 'header',
  styleUrls: ['./header.component.sass'],
  templateUrl: './header.component.html'
})

export class Header {
  @ViewChild('nav') nav?: ElementRef<HTMLElement>;
  @ViewChild('cartItems') cartItems?: ElementRef<HTMLDivElement>;

  @Input('numOfItems') numOfItems: number = 0;

  navigations = ['Collections', 'Men', 'Women', 'About', 'Contact'];

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
}
