import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl:string = "http://localhost:3000"
  private reservations: Reservation[] = [];

  constructor(
    private httpClient: HttpClient
  ){
    let savedResservation = localStorage.getItem("reservations");
    this.reservations = savedResservation? JSON.parse(savedResservation) : [];

  }

  //CRUD

  getReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.apiUrl+"reservations");
    //return this.reservations;
  }

  getReservation(id: string): Reservation | undefined{
    return this.reservations.find(res => res.id === id);
  }

  addReservation(reservation: Reservation): void{
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    //localStorage.setItem("reservations",JSON.stringify(this.reservations));
    console.log(reservation);
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id == id);
    this.reservations.splice(index,1);
    //localStorage.setItem("reservations",JSON.stringify(this.reservations));
  }
  
  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === updatedReservation.id);
    this.reservations[index] = updatedReservation;
    //localStorage.setItem("reservations",JSON.stringify(this.reservations));
  }

}
