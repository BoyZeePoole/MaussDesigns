import { Directive, ElementRef, Renderer2, AfterViewInit, Input } from '@angular/core';

declare const grecaptcha: any;
//declare const window: any;


@Directive({
  selector: '[appGoogleCaptcha]'
})
export class GoogleCaptchaDirective {

  @Input() siteKey = '6LfKrNAUAAAAAPnGRnP1vGgV8FuNegGsj4Jd_A7h';

  constructor() {

    const url = 'https://www.google.com/recaptcha/api.js?render=' + this.siteKey;
    if (!document.querySelector(`script[src='${url}']`)) {
      let script = document.createElement('script');
      script.src = url;
      script.async = false;
        script.defer = true;
      document.body.appendChild(script);
    }
  }



  ngAfterViewInit(): void {
    grecaptcha.ready(() => {
      grecaptcha.execute('6LfKrNAUAAAAAPnGRnP1vGgV8FuNegGsj4Jd_A7h', { action: 'home' }).then((token) => {
        console.log(token);
      });
    });
  }

  onClick() {

  }
}
