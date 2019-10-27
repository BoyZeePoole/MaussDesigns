import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appPassword2]'
})
export class Password2Directive implements  AfterViewInit {
  icon:string = 'icon-Bulb'
  private badgeElement: HTMLElement;
  ngAfterViewInit(): void {
    this.setup();
  }

  private _shown = false;

  toggle(span: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.className = 'icon-bulb_off trigger';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.className = 'icon-Bulb_on trigger';
    }
  }
  setup() {
    const parent = this.el.nativeElement.parentNode;

    this.badgeElement = this.renderer.createElement('span');
    this.badgeElement.classList.add('icon-bulb_off');
    this.badgeElement.classList.add('trigger');

    this.badgeElement.addEventListener('click', (event) => {
      this.toggle(this.badgeElement);
    });
    this.renderer.appendChild(parent, this.badgeElement);
  }

  constructor(private renderer: Renderer2, private el: ElementRef) {
    //this.setup();
  }

}
