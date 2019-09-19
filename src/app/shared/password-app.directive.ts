import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appPassword]'
})
export class PasswordDirective implements  AfterViewInit {
  icon:string = 'icon-eye'
  private badgeElement: HTMLElement;
  ngAfterViewInit(): void {
    this.setup();
  }

  private _shown = false;

  toggle(span: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.className = 'icon-eye-blocked trigger';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.className = 'icon-eye trigger';
    }
  }
  setup() {
    const parent = this.el.nativeElement.parentNode;

    this.badgeElement = this.renderer.createElement('span');
    this.badgeElement.classList.add('icon-eye');
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
