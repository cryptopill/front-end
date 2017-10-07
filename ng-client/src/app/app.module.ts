import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* Angular Material */
import { MatButtonModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PhysicianComponent } from './components/physician/physician.component';
import { PharmacistComponent } from './components/pharmacist/pharmacist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhysicianComponent,
    PharmacistComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, MatIconModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'physician',
        component: PhysicianComponent
      },
      {
        path: 'pharmacist',
        component: PharmacistComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
