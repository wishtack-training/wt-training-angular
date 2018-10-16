import angular from 'angular';
import {HelloComponent} from './hello.component';

export const appModule = angular.module('app', []);

appModule.component('wtHello', HelloComponent.config);

appModule.component('wtSeparator', {
    template: '<hr>'
});
