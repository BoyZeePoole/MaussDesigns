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
    constructor(public loaderService: LoaderService) { }  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      clearTimeout(this.interval);
      this.interval = setTimeout(() => {        
        this.loaderService.show();
      }, this.showAfter);
        
        return next.handle(req).pipe(
            finalize(() => {
              clearTimeout(this.interval);
              //this.interval = setTimeout(() => {
                this.loaderService.hide();
              //}, 0);
            })
        );
    }
}