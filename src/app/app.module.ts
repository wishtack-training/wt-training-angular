import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateListComponent } from './candidate/candidate-list/candidate-list.component';
import { CandidatePreviewComponent } from './candidate/candidate-preview/candidate-preview.component';
import { SkillListComponent } from './candidate/skill-list/skill-list.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        CandidateListComponent,
        SkillListComponent,
        CandidatePreviewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
