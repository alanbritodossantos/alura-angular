import { Component, EventEmitter, Output } from "@angular/core";


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    console.log('solicitada nova transferência');
    const valorEmitir = { valor: this.valor, destino: this.destino}
    this.aoTransferir.emit(valorEmitir);// esse metodo exibe a mensagem, no caso os valores.

    this.limparCampos();

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
