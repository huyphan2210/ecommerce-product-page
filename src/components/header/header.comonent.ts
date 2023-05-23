import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'header',
  styleUrls: ['./header.component.sass'],
  templateUrl: './header.component.html'
})

export class Header {
  @ViewChild('nav') nav?: ElementRef<HTMLElement>;

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
}
