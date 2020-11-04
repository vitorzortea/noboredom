import { Component, OnInit } from '@angular/core';
import { AtividadesService } from '../service/atividades.service';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.styl']
})
export class AtividadeComponent implements OnInit {
  loading = true;
  atividade: any;

  constructor(
    public atividadeService: AtividadesService,
  ) { }

  ngOnInit() { this.start();  }

  start() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.atividade = this.atividadeService.selectActive();
    }, 3000);
  }

}
