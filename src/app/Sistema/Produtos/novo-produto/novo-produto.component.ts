import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalNovoIngredienteService } from './modal-novo-ingrediente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.scss']
})
export class NovoProdutoComponent {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
    private service: ModalNovoIngredienteService,
    private router: Router){
    this.form = this.fb.group({
      nome: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      tamanho: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      descricao: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      valor_unitario: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('Submit');
      this.service.create(this.form.value).subscribe(
        sucess => console.log('Sucesso'),
        error => console.log('Error'),
        () => console.log('Rquest Completo')
        );
        this.router.navigate(['/users'])
    }
    else{
      alert("Preencha os campos corretamente")
    }
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
    this.router.navigate(['/users']);
  }
}
