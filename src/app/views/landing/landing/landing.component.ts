import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
    selector: 'wt-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

    constructor(private _authService: AuthService) {
    }

    signIn() {
        this._authService.signIn({
            email: 'foo.bar@wishtack.io',
            password: 'kklkjwjio2kj41klj23kl4nf'
        })
            .subscribe();
    }

}
