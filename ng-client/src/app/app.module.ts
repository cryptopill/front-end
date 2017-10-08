import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

/* Angular Material */
import { MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatCardModule } from '@angular/material';

/* Services */
import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PhysicianComponent } from './components/physician/physician.component';
import { PharmacistComponent } from './components/pharmacist/pharmacist.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhysicianComponent,
    PharmacistComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatCardModule,
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
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
