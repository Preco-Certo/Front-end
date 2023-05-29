import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Telas/login/login.component';
import { HomeComponent } from './Telas/home/home.component';
import { CadastroComponent } from './Telas/cadastro/cadastro.component';
import { HomeSistemaComponent } from './Sistema/home-sistema/home-sistema.component';
import { IngredientesComponent } from './Sistema/Ingredientes/ingredientes/ingredientes.component';
import { ListaCompraComponent } from './Sistema/Ingredientes/lista-compra/lista-compra.component';
import { ProdutosComponent } from './Sistema/Produtos/produtos/produtos.component';
import { NovoProdutoComponent } from './Sistema/Produtos/novo-produto/novo-produto.component';
import { NovoIngredienteComponent } from './Sistema/Ingredientes/novo-ingrediente/novo-ingrediente.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home-sistema', component: HomeSistemaComponent },
  { path: 'ingredientes', component: IngredientesComponent },
  { path: 'lista', component: ListaCompraComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'novo-produto', component: NovoProdutoComponent },
  { path: 'novo-ingrediente', component: NovoIngredienteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
