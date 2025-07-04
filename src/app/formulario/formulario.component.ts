import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';
import { PessoaService } from '../services/pessoa.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  formulario = new FormGroup({
    nome : new FormControl('',[Validators.required,Validators.minLength(3)]),
    idade : new FormControl(null,[Validators.required,Validators.min(0),Validators.max(120)]),
    cidade : new FormControl('',[Validators.required,Validators.minLength(3)])
  })

  btnCadastrar:boolean = true;

  vetor:Pessoa[] = [];

  indice:number = -1;

  constructor(private pessoaService: PessoaService,
  ){

  }
  ngOnInit(): void {
    this.pessoaService.listar().subscribe(pessoa => {
      this.vetor = pessoa
    });
  }


  cadastrar(){
    this.vetor.push(this.formulario.value as Pessoa)
    this.limpaCamposFormulario();
    console.table(this.vetor)
  }

  selecionar(indice:number){
    this.indice = indice;

    this.formulario.setValue({
      nome : this.vetor[indice].nome,
      idade : this.vetor[indice].idade,
      cidade : this.vetor[indice].cidade
    });

    this.btnCadastrar = false;

  }

  alterar(){
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    this.limpaCamposFormulario();

    this.btnCadastrar = true;
  }

  remover(){
    this.vetor.splice(this.indice,1)
    this.btnCadastrar = true;
    this.limpaCamposFormulario();

  }

  cancelar(){
    this.limpaCamposFormulario();

    this.btnCadastrar = true;
  }


  limpaCamposFormulario(){
    this.formulario.reset();
  }
}
