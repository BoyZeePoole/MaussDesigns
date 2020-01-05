import { Component, AfterViewInit, Input  } from '@angular/core';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements AfterViewInit  {

  @Input() url = location.href;
  @Input() layout = 'button_count';
  @Input() share = 'true';
  @Input() width = '225px';

  constructor() {
      // initialise facebook sdk after it loads if required
      if (!window['fbAsyncInit']) {
          window['fbAsyncInit'] = function () {
              window['FB'].init({
                  appId: 'your-app-id',
                  autoLogAppEvents: true,
                  xfbml: true,
                  version: 'v3.0'
              });
          };
      }

      // load facebook sdk if required
      const url = 'https://connect.facebook.net/en_US/sdk.js';
      if (!document.querySelector(`script[src='${url}']`)) {
          let script = document.createElement('script');
          script.src = url;
          document.body.appendChild(script);
      }
  }

  ngAfterViewInit(): void {
      // render facebook button
      window['FB'] && window['FB'].XFBML.parse();
  }

}
