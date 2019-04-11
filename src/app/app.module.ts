import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateCardComponent } from './candidate/candidate-card/candidate-card.component';
import { CandidateFormComponent } from './candidate/candidate-form/candidate-form.component';
import { CandidateListComponent } from './candidate/candidate-list/candidate-list.component';
import { CandidatePreviewComponent } from './candidate/candidate-preview/candidate-preview.component';
import { CandidateSearchComponent } from './candidate/candidate-search/candidate-search.component';
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
        SkillFormComponent,
        CandidateFormComponent,
        CandidateSearchComponent,
        CandidateCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
