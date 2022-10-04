import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { LandingComponent } from './landing/landing.component';
import { AppRoutes } from './app.routes';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CookieModule } from 'ngx-cookie';
import { CreateStudySetComponent } from './create-study-set/create-study-set.component';
import { faCaretSquareLeft, faClone, faUser, faPlusSquare } from "@fortawesome/free-regular-svg-icons";

@NgModule({
  declarations: [AppComponent, LandingComponent, CreateStudySetComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FontAwesomeModule,
    RouterModule.forRoot(AppRoutes, { enableTracing: true }),
    ModalModule.forRoot(),
    CookieModule.withOptions(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faClone, faUser, faCaretSquareLeft, faPlusSquare);
  }
}
