import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IdProdutoCarrinho } from '../produtos/produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IdProdutoCarrinho[] = [];
  total = 0;
  

  constructor(
    public carrinhoService: CarrinhoService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calculaTotal();
  }
  calculaTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0) 
  }
    

  removerProdutoCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calculaTotal();
  }

  comprar(){
    alert("Compra realizada com sucesso!");
    this.carrinhoService.limparCarrinho();
    this.itensCarrinho = [];
    this.router.navigate(['produtos']);
  }

}
