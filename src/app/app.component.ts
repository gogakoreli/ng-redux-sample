import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(private ngRedux: NgRedux<IAppState>) {

    }

    onClick() {
        this.ngRedux.dispatch({ type: INCREMENT });
    }

}
