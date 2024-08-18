import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AuthConfig, OAuthStorage, provideOAuthClient } from 'angular-oauth2-oidc';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { authAppInitializerFactory } from './core/auth-app-initializer.factory';
import { authConfig } from './core/auth-config';
import { AuthService, storageFactory } from './core/auth.service';
import { AuthGuardWithForcedLogin } from './core/auth-guard-with-forced-login.service';
import { authModuleConfig } from './core/auth-module-config';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptorsFromDi()),provideOAuthClient({  resourceServer: {
    allowedUrls: ['http://localhost:5222'],
    sendAccessToken: true,
  }}),{ provide: APP_INITIALIZER, useFactory: authAppInitializerFactory, deps: [AuthService], multi: true },
  
  { provide: AuthConfig, useValue: authConfig },
  
  { provide: OAuthStorage, useFactory: storageFactory },AuthGuardWithForcedLogin]
};
