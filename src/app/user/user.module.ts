import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UserFormReactiveComponent } from './user-form-reactive/user-form-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserStore } from './user-store';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        UserFormReactiveComponent,
        UserListComponent,
        UserPreviewComponent,
        UserStatsComponent
    ],
    imports: [
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [
        UserFormReactiveComponent,
        UserListComponent,
        UserPreviewComponent,
        UserStatsComponent
    ]
})
export class UserModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UserModule,
            providers: [
                UserStore
            ]
        };
    }

}

