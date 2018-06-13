import { Component } from '@angular/core';

@Component({
    selector: 'wt-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    messageList = [];
    title = 'Loading';
    themeList = [
        {
            backgroundColor: '#000000cc',
            color: 'white'
        },
        {
            backgroundColor: 'white',
            color: 'black'
        }
    ];
    selectedTheme;

    constructor() {
        setInterval(() => {
            this.title += '.';

            this.messageList = [...this.messageList, 'Hello!'];

        }, 500);
    }

    canResetTitle() {
        return this.title.length > 10;
    }

    resetEverything() {
        this.title = 'Loading';
        this.messageList = [];
    }

    selectTheme(theme) {
        this.selectedTheme = theme;
    }
}
