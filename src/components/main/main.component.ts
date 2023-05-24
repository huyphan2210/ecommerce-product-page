import { Component, ViewChild, ElementRef, AfterViewInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'main',
  styleUrls: ['./main.component.sass'],
  templateUrl: './main.component.html'
})

export class Main implements AfterViewInit {
  @ViewChild('productImage') productImage?: ElementRef<HTMLDivElement>;

  @ViewChild('productThumbnails') productThumbnails?: ElementRef<HTMLDivElement>;

  @ViewChild('btnAdd') btnAdd?: ElementRef<HTMLButtonElement>;

  @Output() public numOfItemsChange: EventEmitter<number> = new EventEmitter<number>();
  path = '../../assets/images/icon-minus.svg'
  companyName = 'Sneaker Company';

  productName = 'Fall Limited Editon Sneakers';

  productIntro = `
    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
    outer sole, they'll withstand everything the weather can offer.
  `;

  price = 125.00;

  originalPrice = 250.00;

  discount = '50%';

  numberOfItems = 0;

  numberOfCartItems = 0;

  ngAfterViewInit(): void {
    if (this.btnAdd) {
      this.btnAdd.nativeElement.style.opacity = '0.5';
      this.btnAdd.nativeElement.style.cursor = 'not-allowed';
    }
  }

  public handleClickThumbnail(e: MouseEvent, index: number) {
    const imgElement = e.currentTarget as HTMLImageElement;
    if (this.productThumbnails) {
      const thumbnails = this.productThumbnails.nativeElement.getElementsByTagName('img');
      for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].style.outline = 'none';
        thumbnails[i].style.opacity = '1';
      }
    }

    imgElement.style.outline = 'var(--orange) solid 0.2rem';
    imgElement.style.opacity = '0.5';

    if (this.productImage) {
      const images = this.productImage.nativeElement.getElementsByTagName('img');
      for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translate(-${index * 100}%)`;
        if (i === index) {
          images[i].style.opacity = '1';
        } else {
          images[i].style.opacity = '0';
        }
      }
    }
  }

  public increase() {
    this.numberOfItems++;
    if (this.btnAdd) {
      this.btnAdd.nativeElement.style.opacity = '';
      this.btnAdd.nativeElement.style.cursor = '';
    }
  }

  public decrease() {
    if (this.numberOfItems > 0){
      this.numberOfItems--;
      if (this.btnAdd && this.numberOfItems === 0) {
        this.btnAdd.nativeElement.style.opacity = '0.5';
        this.btnAdd.nativeElement.style.cursor = 'not-allowed';
      }
    }
  }

  public addItemsToCart() {
    if (this.numberOfItems === 0) return;
    this.numberOfCartItems += this.numberOfItems;

    this.numOfItemsChange.emit(this.numberOfCartItems);
  }
}
