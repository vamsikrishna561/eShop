import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AuthGuard } from './core/auth-guard.service';
import { AuthGuardWithForcedLogin } from './core/auth-guard-with-forced-login.service';

export const routes: Routes = [{ path: '', component: CatalogComponent, canActivate : [AuthGuardWithForcedLogin] },{
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
}];
