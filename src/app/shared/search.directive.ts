import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective implements  AfterViewInit {
  icon:string = 'icon-eye'
  private badgeElement: HTMLElement;
  ngAfterViewInit(): void {
    this.setup();
  }

  private _shown = true;

  toggle(isBig : boolean) {
    this._shown = !this._shown;
    if (isBig) {
      this.el.nativeElement.classList.remove('search-small');
      this.el.nativeElement.classList.add('search-large');
     // span.className = 'icon-eye-blocked trigger';
    } else {
      this.el.nativeElement.classList.add('search-small');
      this.el.nativeElement.classList.remove('search-large');
      //span.className = 'icon-eye trigger';
    }
  }
  setup() {
    const parent = this.el.nativeElement.parentNode;
    const input = this.el.nativeElement;

    this.badgeElement = this.renderer.createElement('span');
    this.badgeElement.classList.add('icon-search');
    this.badgeElement.classList.add('trigger-right');

    input.addEventListener('click', () => {
      this.toggle(true);
    });
    input.addEventListener('blur', () => {
      if(input.value === ''){
        this.toggle(false);
      }
    });
    this.renderer.appendChild(parent, this.badgeElement);
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {
    //this.setup();
  }

}
