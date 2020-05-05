import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { PageTemplateComponent } from './page-template/page-template.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BookService} from './service/book.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { CreateBookComponent } from './create-book/create-book.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'create', component: CreateBookComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    PageTemplateComponent,
    HeaderComponent,
    CreateBookComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
