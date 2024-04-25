import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
=======

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
>>>>>>> 992e074015fd8220ff157716f2519d66620b7887
};
