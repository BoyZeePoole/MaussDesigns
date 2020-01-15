import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class PubSubService {
    private subject = new Subject<boolean>();
    private searchstring = new Subject<string>();
    private loggedIn = new Subject<boolean>();
    private globalMenu = new Subject<boolean>();
    
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

    setGlobalMenu(globalMenu: boolean): boolean{
        this.globalMenu.next(globalMenu);
        return globalMenu;
    }

    get globalShowMenu(): Observable<boolean>{
        return this.globalMenu.asObservable();

    }

}


@Injectable()
export class ResponsiveService {
    private isMobile = new Subject();
    public screenWidth: string;


    constructor() {
        this.checkWidth();
    }

    onMobileChange(status: boolean) {
        this.isMobile.next(status);
    }

    getMobileStatus(): Observable<any> {
        return this.isMobile.asObservable();
    }

    public checkWidth() {
        var width = window.innerWidth;
        if (width <= 768) {
            this.screenWidth = 'sm';
            this.onMobileChange(true);
        } else if (width > 768 && width <= 992) {
            this.screenWidth = 'md';
            this.onMobileChange(false);
        } else {
            this.screenWidth = 'lg';
            this.onMobileChange(false);
        }
    }

}