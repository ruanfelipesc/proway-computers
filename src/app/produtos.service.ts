import { Injectable } from '@angular/core';
import { IdProduto, produtos } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IdProduto[] = produtos;

  constructor() { }

  getAll() {
    return this.produtos;
  }
  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id === produtoId);
  }
}
