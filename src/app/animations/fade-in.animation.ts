import { trigger, state, animate, transition, style, query } from '@angular/animations';

export const fader =

    trigger('routeAnimations', [
        transition('* => *', [
                // css styles at start of transition
                style({ opacity: 0 }),
    
                // animation and styles at end of transition
                animate('.3s', style({ opacity: 1 }))
            ]),
    ]);
