import { Routes } from '@angular/router';
import { MariodexPageComponent } from './features/mario/mariodex-page-component/mariodex-page-component';
import { NuevoPersonajeComponent } from './features/mario/nuevo-personaje-component/nuevo-personaje-component';

export const routes: Routes = [
    { path: '', redirectTo: 'mariodex', pathMatch: 'full' }, // Ruta por defecto
    { path: 'mariodex', component: MariodexPageComponent }, // mariodex -> ruta por defecto
    { path: 'nuevo', component: NuevoPersonajeComponent} // registrar personaje
];
