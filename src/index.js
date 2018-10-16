'use strict';

import angular from 'angular';

import {appModule} from './app.module';

document.addEventListener('DOMContentLoaded', () => {

    angular.bootstrap(document.body, [
        appModule.name
    ]);

});
