// Angular Stuff
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule, isDevMode } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSidenavMenuModule } from 'mat-sidenav-menu';

// Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { SideNavComponent } from './view/side-nav/side-nav.component';
import { HeaderComponent } from './view/header/header.component';
import { HomeComponent } from './view/home/home.component';
import { InitiativeComponent } from './view/initiative/initiative.component';

import { OrderByPipe } from './service/pipes/orderBy.pipe';

// Define app routes.
const routes: Routes = [
  { path: '',
    component: HomeComponent,
    data: { title: 'DM Assistant' }
  },
  { path: 'initiative',
    component: InitiativeComponent,
    data: { title: 'Initiative Tool' }
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
    InitiativeComponent,

    OrderByPipe,
  ],
  imports: [
    // Routing Setup
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // Enable for debugging.
    ),

    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatSidenavMenuModule,
    NoopAnimationsModule,
    FlexLayoutModule,

    // Material Components
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
