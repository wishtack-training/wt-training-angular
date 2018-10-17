import angular from 'angular';
import ngRouteName from 'angular-route';
import {HelloComponent} from './hello/hello.component';
import {bookModule} from './book/book.module';


export const appModule = angular.module('app', [
    bookModule.name,
    ngRouteName
]);

appModule.component('wtHello', HelloComponent.config);

appModule.component('wtSeparator', {
    template: '<hr>'
});

appModule.config(($routeProvider) => {

    $routeProvider
        .when('/book-list', {
            template: '<wt-book-list></wt-book-list>'
        })
        .when('/book-search', {
            template: '<wt-book-search></wt-book-search>'
        })
        .when('/not-found', {
            template: '<h1>😞</h1>'
        })
        .otherwise('/not-found');

});