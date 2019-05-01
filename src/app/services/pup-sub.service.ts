import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class PubSubService {
    private subject = new Subject<boolean>();
    private searchstring = new Subject<string>();
    private loggedIn = new Subject<boolean>();

    constructor() { }

    get isLoggedIn() : Observable<boolean>{
        return this.loggedIn.asObservable();
    }

    setLoggedIn(isLoggedIn: boolean){
        this.loggedIn.next(isLoggedIn);
        return isLoggedIn;
    }


    get getSearchstring(): Observable<string> {
        return this.searchstring.asObservable();
    }

    setSearchString(search: string): string {
        this.searchstring.next(search);
        return search;
    }

    get isHome(): Observable<boolean> {
        return this.subject.asObservable();
    }

    setHome(isHome: boolean): boolean {
        this.subject.next(isHome);
        return isHome;
    }

}