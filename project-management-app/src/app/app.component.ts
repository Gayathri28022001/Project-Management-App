import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-management-app';
}
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: []
})
export class AppModule { }
