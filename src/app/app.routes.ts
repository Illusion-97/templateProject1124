import {ActivatedRouteSnapshot, RouterStateSnapshot, Routes} from '@angular/router';
import {authGuard} from '../tools/auth.guard';
import {inject} from '@angular/core';
import {ArticleService} from '../services/article.service';
import {catchError, of} from 'rxjs';

export const routes: Routes = [
  {
    path: "",
    // Demande au router de s'assurer que l'URL "complete" dans le navigateur est exactement la même que le path de cette route
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    // loadComponent: () => import().then(m => )
    loadComponent: () => import('../views/home/home.component')
      .then(m => m.HomeComponent),
    resolve: {
      articles: () => inject(ArticleService).all()
    }
  },
  {
    path: "generic",
    loadComponent: () => import('../views/generic/generic.component')
      .then(m => m.GenericComponent)
  },
  {
    path: "elements",
    loadComponent: () => import('../views/elements/elements.component')
      .then(m => m.ElementsComponent)
  },
  {
    path: "form-control",
    loadComponent: () => import('../views/form-control/form-control.component')
      .then(m => m.FormControlComponent)
  },
  {
    path: "login",
    loadComponent: () => import('../views/login/login.component')
      .then(m => m.LoginComponent)
  },
  {
    path: "register",
    loadComponent: () => import('../views/register/register.component')
      .then(m => m.RegisterComponent)
  },
  {
    path: "editor/:id",
    loadComponent: () => import('../views/article-editor/article-editor.component')
      .then(m => m.ArticleEditorComponent),
    canMatch: [authGuard],
    resolve: {
      article: (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const id = +(route.paramMap.get('id') || 0)
        return id ? inject(ArticleService).byId(id).pipe(catchError(() => of(undefined))) : undefined
      }
    }
  },
  {
    path: "**", // Wildcard (toute valeur)
    loadComponent: () => import('../views/not-found/not-found.component')
      .then(m => m.NotFoundComponent)
  }
];
