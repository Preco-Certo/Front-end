import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Telas/login/login.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { HomeComponent } from './Telas/home/home.component';
import { CadastroComponent } from './Telas/cadastro/cadastro.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { HomeSistemaComponent } from './Sistema/home-sistema/home-sistema.component';
import { IngredientesComponent } from './Sistema/Ingredientes/ingredientes/ingredientes.component';
import { ListaCompraComponent } from './Sistema/Ingredientes/lista-compra/lista-compra.component';
import { CardIngredienteComponent } from './Componentes/card-ingrediente/card-ingrediente.component';
import { CardProdutoComponent } from './Componentes/card-produto/card-produto.component';
import { ProdutosComponent } from './Sistema/Produtos/produtos/produtos.component';
import { NovoProdutoComponent } from './Sistema/Produtos/novo-produto/novo-produto.component';
import { NovoIngredienteComponent } from './Sistema/Ingredientes/novo-ingrediente/novo-ingrediente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    CadastroComponent,
    MenuComponent,
    HomeSistemaComponent,
    IngredientesComponent,
    ListaCompraComponent,
    CardIngredienteComponent,
    CardProdutoComponent,
    ProdutosComponent,
    NovoProdutoComponent,
    NovoIngredienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
