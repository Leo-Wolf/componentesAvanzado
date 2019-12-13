import { Tienda } from './../models/tienda.model';
import { Producto } from './../interface/producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-con-estado',
  templateUrl: './con-estado.component.html',
  styleUrls: ['./con-estado.component.scss']
})
export class ConEstadoComponent implements OnInit {

  modeloTienda: Tienda = new Tienda();
  itemsComprados: Array<Producto>;

  constructor() {
    this.itemsComprados = [];
   }

  ngOnInit() {
  }

  selecionarItem(item){
    this.itemsComprados.push(item);
  }

}
