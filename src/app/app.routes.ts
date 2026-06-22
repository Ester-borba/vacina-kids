import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage)
  },
  {
    path: 'campanhas',
    loadComponent: () =>
      import('./pages/campanhas/campanhas.page').then(m => m.CampanhasPage)
  },
  {
    path: 'historico-vacinal/:id',
    loadComponent: () =>
      import('./pages/historico-vacinal/historico-vacinal.page').then(m => m.HistoricoVacinalPage)
  },
  {
    path: 'crianca-perfil/:id',
    loadComponent: () =>
      import('./pages/crianca-perfil/crianca-perfil.page').then(m => m.CriancaPerfilPage)
  },
  {
    path: 'cadastro-crianca',
    loadComponent: () => import('./pages/cadastro-crianca/cadastro-crianca.page').then( m => m.CadastroCriancaPage)
  }
];
