'use strict';

import angular from 'angular';

import {appModule} from './app.module';

require('./style.scss');

document.addEventListener('DOMContentLoaded', () => {

    angular.bootstrap(document.body, [
        appModule.name
    ]);

});
