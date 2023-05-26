import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Telas/login/login.component';
import { HomeComponent } from './Telas/home/home.component';
import { CadastroComponent } from './Telas/cadastro/cadastro.component';
import { HomeSistemaComponent } from './Sistema/home-sistema/home-sistema.component';
import { IngredientesComponent } from './Sistema/Ingredientes/ingredientes/ingredientes.component';
import { ListaCompraComponent } from './Sistema/Ingredientes/lista-compra/lista-compra.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home-sistema', component: HomeSistemaComponent },
  { path: 'ingredientes', component: IngredientesComponent },
  { path: 'lista', component: ListaCompraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
