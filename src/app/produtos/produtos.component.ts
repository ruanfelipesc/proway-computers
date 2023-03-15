import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NotificacaoService } from '../notificacao.service';
import { ProdutosService } from '../produtos.service';
import { IdProduto } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IdProduto[] | undefined;
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService
  ) { }

  ngOnInit(): void {
    const produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get('descricao')?.toLowerCase();
      
      if (descricao) {
        this.produtos = this.produtosService.getAll().filter(produto => produto.descricao.toLowerCase().includes(descricao));
      return;
      }
      this.produtos = produtos;
    });
    this.produtos = this.produtosService.getAll();
  }


}
