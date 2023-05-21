import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  title = 'Cadastre-se';
  subtitle = 'Insira os dados de seu negócios para nós ajudar a entender quais são suas necessidades';

  // placeholder

  cnpj = '12.345.678/0001-91';
  razao = 'Associados Alimentos LTDA';
  fantasia = 'Restaurante Cantina';
  cep = '17.500-500';
  endereco = 'Avenida Sampaio Vidal';
  numero = '123';
  bairro = 'Centro';
  cidade = 'São Paulo';
  uf = 'SP';
  complemento = 'Galeria de Lojas';
  celular = '(14) 99876-5432';
  email = 'email@email.com';

}
