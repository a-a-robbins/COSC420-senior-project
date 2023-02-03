import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResumeComponent } from './resume/resume.component';
import { CodeProjectsComponent } from './code-projects/code-projects.component';
import { CreativeCollectionComponent } from './creative-collection/creative-collection.component';
import { BackstoryComponent } from './backstory/backstory.component';
import { RouterModule } from "@angular/router";

//decorator that converts ts to angular
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ResumeComponent,
    CodeProjectsComponent,
    CreativeCollectionComponent,
    BackstoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot([
      {path: '', component: LandingPageComponent},
      {path: 'resume', component: ResumeComponent},
      {path: 'code-projects', component: CodeProjectsComponent},
      {path: 'creative-collection', component: CreativeCollectionComponent},
      {path: 'backstory', component: BackstoryComponent}
    ])
  ],
  //providers = dependencies for this module (allows for injection) --services go here
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
