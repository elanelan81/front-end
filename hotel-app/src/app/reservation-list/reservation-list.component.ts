import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';
import { Router, ActivatedRoute } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit{

  reservations: Reservation[] = [];

  constructor(
    private reservationService: ReservationService
   ) {}
  
    ngOnInit(): void {
      //this.reservations = this.reservationService.getReservations();
      this.reservationService.getReservations().subscribe( reservations => {
        this.reservations = reservations;
      })
    
    deleteReservation(id:string) {
      this.reservationService.deleteReservation(id);
    }

}
