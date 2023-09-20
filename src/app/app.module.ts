import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
 
import { RouterModule, Routes } from '@angular/router';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { CalcComponent } from './calc/calc.component';


const routes: Routes = [
{ path: '', component: HomeComponent, title:'Home' },
{ path: 'list', component: ListComponent, title:'Feed' },
{ path: 'calc', component: CalcComponent, title:'Calc' }
];
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ToDoItemsComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatMenuModule,
    MatGridListModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }