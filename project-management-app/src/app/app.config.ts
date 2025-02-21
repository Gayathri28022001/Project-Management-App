import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { ClientManagementComponent } from './components/client-management/client-management.component';
//import { ClientMeetingManagementComponent } from './components/client-meeting-management/client-meeting-management.component';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(FormsModule),
    provideClientHydration(withEventReplay()),
    //provideRouter([
    //  { path: '', component: ClientManagementComponent } // Set as default route
    //])
  ]
};
