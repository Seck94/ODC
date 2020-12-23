import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBienComponent } from './bien/add-bien/add-bien.component';
import { DetailBienComponent } from './bien/detail-bien/detail-bien.component';
import { DetailReservationsComponent } from './bien/detail-reservations/detail-reservations.component';
import { EditReservationsComponent } from './bien/edit-reservations/edit-reservations.component';
import { ListBienComponent } from './bien/list-bien/list-bien.component';
import { ReservationBienComponent } from './bien/reservation-bien/reservation-bien.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/biens' , pathMatch: 'full' },
  { path: 'biens' , component: ListBienComponent },
  { path: 'biens/add' , component: AddBienComponent },

  {path: 'reservations',
        component: ReservationBienComponent,
        children: [
          {path: ':id', component: EditReservationsComponent},
          {path: ':id/detail', component: DetailReservationsComponent},
        ]
  },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'},
  { path: 'biens/:id' , component: DetailBienComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
