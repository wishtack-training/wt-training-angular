import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateSearchComponent } from './candidate-search/candidate-search/candidate-search.component';
import { CandidateCardComponent } from './candidate/candidate-card/candidate-card.component';
import { CandidateFormModule } from './candidate/candidate-form/candidate-form.component';
import { CandidateListComponent } from './candidate/candidate-list/candidate-list.component';
import { CandidatePreviewComponent } from './candidate/candidate-preview/candidate-preview.component';
import { SkillListComponent } from './candidate/skill-list/skill-list.component';
import { DemoComponent } from './demo/demo.component';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
    declarations: [
        AppComponent,
        CandidateListComponent,
        CandidatePreviewComponent,
        CandidateSearchComponent,
        CandidateCardComponent,
        DemoComponent,
        LandingComponent,
        NavComponent,
        SkillListComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        CandidateFormModule,
        FormsModule,
        HttpClientModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
