import { Component, Input, OnInit } from '@angular/core';
import { IngredientesService } from './ingredientes.service';
import { Ingredientes } from './ingredientes.interface';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.scss']
})
export class IngredientesComponent {

  @Input() user: any;

  table:Ingredientes[] = [];
  constructor(private service: IngredientesService) {}

  ngOnInit() {
      this.service.listarIngredientes().subscribe((event) => {
        this.table = event.result as Ingredientes[]
        console.log(this.table);
      })
  }
}
