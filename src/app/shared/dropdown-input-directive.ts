import { Directive, ElementRef, Renderer2, AfterViewInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IProductOptions } from '../models/product-options';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective implements AfterViewInit {
  icon: string = 'icon-eye'
  private badgeElement: HTMLElement;
  private dropDownData: HTMLElement;
  private coords = { x: 0, y: 0 };
  @Input() data: IProductOptions[];
  @Output() valueChange: EventEmitter<IProductOptions> = new EventEmitter<IProductOptions>();

  ngAfterViewInit(): void {
    this.setup();
  }

  private _shown = true;

  showDropdownData(div: HTMLElement, display: boolean) {
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const { x, y } = this.el.nativeElement.getBoundingClientRect();
    const left = this.el.nativeElement.getBoundingClientRect().left;
    const top = this.el.nativeElement.getBoundingClientRect().top;

    let _top = `${(y || top) + scrollTop + 35}px`;
    let _left = `${x || left}px`;

    div.style.setProperty('top', _top);
    div.style.setProperty('left', _left);
    if (!display) {
      div.style.setProperty('max-height', '0');
      div.style.setProperty('-webkit-transform', 'perspective(400) rotate3d(1,0,0,-90deg)');
      div.style.setProperty('-moz-transform', 'perspective(400) rotate3d(1,0,0,-90deg)');
      div.style.setProperty('-ms-transform', 'perspective(400) rotate3d(1,0,0,-90deg)');
    }
    else {
      div.style.setProperty('-webkit-transform', 'perspective(400) rotate3d(0,0,0,0)');
      div.style.setProperty('-moz-transform', 'perspective(400) rotate3d(0,0,0,0)');
      div.style.setProperty('-ms-transform', 'perspective(400) rotate3d(0,0,0,0)');
      div.style.setProperty('max-height', '1000px');

    }
  }

  setup() {
    const parent = this.el.nativeElement.parentNode;
    const { x, y } = this.el.nativeElement.getBoundingClientRect();

    this.badgeElement = this.renderer.createElement('span');
    this.badgeElement.classList.add('icon-caret-down');
    this.badgeElement.classList.add('drop-down-indicator');

    this.dropDownData = this.renderer.createElement('div');
    this.dropDownData.classList.add('drop-down-layer');
    this.createOptions();

    document.body.appendChild(this.dropDownData);
    this.dropDownData.style.top = `${y + 35}px`;
    this.dropDownData.style.left = `${x}px`;

    this.el.nativeElement.addEventListener('click', (event) => {
      this.showDropdownData(this.dropDownData, true);
    });
    this.el.nativeElement.addEventListener('blur', (event) => {
      if (this._shown) {
        this.showDropdownData(this.dropDownData, false);
      }
    });

    this.badgeElement.addEventListener('click', (event) => {
      this.el.nativeElement.focus();
      this.showDropdownData(this.dropDownData, true);
    });
    this.renderer.appendChild(parent, this.badgeElement);
  }

  createOptions() {
    this.data.forEach((data) => {
      let item = this.renderer.createElement('div');
      item.innerHTML = data.description;
      item.addEventListener('mousedown', (event) => {
        this.el.nativeElement.value = data.selectedValue;
        this.valueChange.emit(data);
        //this.showDropdownData(this.dropDownData);
      });
      this.renderer.appendChild(this.dropDownData, item);
    })
  }

  constructor(private renderer: Renderer2, private el: ElementRef, @Inject(DOCUMENT) private document) {
    //this.setup();
  }

}
