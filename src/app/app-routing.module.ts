import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', redirectTo: '\home', pathMatch: 'full'},
{ path: 'home', loadChildren: () => import('./components/paginas/home/home.module').then(m => m.HomeModule) },
{ path: 'informe', loadChildren: () => import('./components/paginas/informe/informe.module').then(m => m.InformeModule) },
{ path: 'usuarios', loadChildren: () => import('./components/paginas/usuarios/usuarios.module').then(m => m.UsuariosModule) },
{ path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
{ path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
