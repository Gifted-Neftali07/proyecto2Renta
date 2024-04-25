import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Vehiculos } from '../vehiculo';
import { VehiculoService } from '../shared/vehiculo.service';


@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.css'
})
export class VehiculosComponent {

  misVehiculos:Vehiculos[]=[];

  constructor(public miservicio: VehiculoService){
    console.log("constructor de vehiculos");
  }

  ngOnInit():void{
    console.log("ngOnInit de Vehiculos");
    this.misVehiculos=this.miservicio.getVehiculo();
    console.log(this.misVehiculos);
  }

  tipoFiltro: string = 'todos';

filtrarTipo(tipo: string) {
  // Convertir el tipo a minúsculas para la comparación
  this.tipoFiltro = tipo.toLowerCase();
}
}
