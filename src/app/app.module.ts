import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateListComponent } from './candidate/candidate-list/candidate-list.component';
import { CandidatePreviewComponent } from './candidate/candidate-preview/candidate-preview.component';
import { SkillFormComponent } from './candidate/skill-form/skill-form.component';
import { SkillListComponent } from './candidate/skill-list/skill-list.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        CandidateListComponent,
        SkillListComponent,
        CandidatePreviewComponent,
        SkillFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
