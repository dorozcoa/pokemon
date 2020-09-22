import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterTextPipe } from './pipes/filter-text.pipe';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { PokemonCardFirebaseComponent } from './components/pokemon-card-firebase/pokemon-card-firebase.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    ToolbarComponent,
    PokemonCardComponent,
    DetalleComponent,
    PokemonCardFirebaseComponent,
    FilterPipe,
    FilterTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
