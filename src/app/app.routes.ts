import { Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { UnvehiculoComponent } from './unvehiculo/unvehiculo.component';
import { SearchComponent } from './search/search.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ReservarComponent } from './reservar/reservar.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'servicios', component:ServiciosComponent},
    {path: 'vehiculos',component: VehiculosComponent},
    {path: 'vehiculo/:id', component: UnvehiculoComponent},
    {path : 'buscador/:nombreh', component: SearchComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'acerca', component: AcercaDeComponent},
    {path: 'reserva', component: ReservarComponent},
    {path: 'preguntas', component: PreguntasComponent},
    {path: 'home', component: HomeComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
    
];
