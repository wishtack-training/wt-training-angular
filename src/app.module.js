import angular from 'angular';
import {HelloComponent} from './hello/hello.component';
import {bookModule} from './book/book.module';


export const appModule = angular.module('app', [
    bookModule.name
]);

appModule.component('wtHello', HelloComponent.config);

appModule.component('wtSeparator', {
    template: '<hr>'
});
