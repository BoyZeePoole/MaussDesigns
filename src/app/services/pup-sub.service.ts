import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class PubSubService {
    private subject = new Subject<boolean>();

    constructor(){}

    get isHome() : Observable<boolean>{
        return this.subject.asObservable();
    }

    setHome(isHome: boolean) : boolean {
        this.subject.next(isHome);
        return isHome;
    }

}