import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoaderService } from '../services/loader.service';
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  showAfter: number = 500;
  duration: number = 2000;
  timeLeft: number;
  interval;
  showing: boolean = false;
    constructor(public loaderService: LoaderService) { }  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      clearTimeout(this.interval);
      this.interval = setTimeout(() => {        
        this.loaderService.show();
        this.showing = true;
      }, this.showAfter);
        
        return next.handle(req).pipe(
            finalize(() => {
              clearTimeout(this.interval);
              let interval = (this.showing == true) ? 500 : 0;
              this.interval = setTimeout(() => {
                this.loaderService.hide();
              }, interval);
            })
        );
    }
}