import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClientManagementComponent } from './components/client-management/client-management.component';
import { ClientMeetingManagementComponent } from './components/client-meeting-management/client-meeting-management.component';

export const routes: Routes = [
  { path: 'client-management', component: ClientManagementComponent, data: { title: 'Client Management' } },
  { path: 'client-meeting-management', component: ClientMeetingManagementComponent, data: { title: 'Client Meeting Management' } },
  { path: '', redirectTo: 'client-management', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ClientManagementComponent,
    ClientMeetingManagementComponent,
    BrowserModule,
    FormsModule],
  providers: []
})
export class AppRoutingModule { }