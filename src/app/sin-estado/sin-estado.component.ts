import { Producto } from './../interface/producto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sin-estado',
  templateUrl: './sin-estado.component.html',
  styleUrls: ['./sin-estado.component.scss']
})
export class SinEstadoComponent implements OnInit {

  @Input() producto: Producto;
  private disabled: boolean;
  public accionCompra: string;
  constructor() {
    this.accionCompra = 'Buy For $${this.productop.precio}';
   }

  ngOnInit() {
  }
  seleccionarItem(){
    this.disabled = true;
    this.accionCompra = 'Added to car';
  }
  isItemDisabled(){
    return !!this.disabled;
  }
}
