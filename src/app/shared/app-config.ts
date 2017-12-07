/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';

/* @todo move this to a ConfigModule loaded by SharedModule? */
@Injectable()
export class AppConfig {

    getApiUrl() {
        return this._getGlobalConfig().apiUrl || `http://wt-users.getsandbox.com`;
    }

    private _getGlobalConfig() {
        return window['__WT_APP_CONFIG__'] || {};
    }

}
