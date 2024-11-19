import { Routes } from '@angular/router';

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
      .then(m => m.HomeComponent)
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
    path: "**", // Wildcard (toute valeur)
    loadComponent: () => import('../views/not-found/not-found.component')
      .then(m => m.NotFoundComponent)
  }
];
