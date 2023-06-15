import { Component, Input, OnInit } from '@angular/core';
import { ProdutosService } from './produtos.service';
import { Produtos } from './produtos.interface';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {
  @Input() produto: any;

  table:Produtos[] = [];
  constructor(private service: ProdutosService) {}

  ngOnInit() {
      this.service.listarprodutos().subscribe((event) => {
        this.table = event.result as Produtos[]
        console.log(this.table);
      })
  }

}
