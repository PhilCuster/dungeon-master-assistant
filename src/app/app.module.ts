// Angular Stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatSidenavMenuModule } from 'mat-sidenav-menu';

// Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { SideNavComponent } from './view/side-nav/side-nav.component';
import { HeaderComponent } from './view/header/header.component';
import { HomeComponent } from './view/home/home.component';

// Define app routes.
const routes: Routes = [
  { path: '',
    component: HomeComponent,
    data: { title: 'DM Assistant' }
  },
  // TODO: Make 404 page
  { path: '**',
    component: HomeComponent,
    data: { title: 'Page Not Found' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    // Routing Setup
    RouterModule.forRoot(
      routes,
      { enableTracing: isDevMode() }
    ),

    BrowserModule,
    MatSidenavMenuModule,
    NoopAnimationsModule,

    // Material Components
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
