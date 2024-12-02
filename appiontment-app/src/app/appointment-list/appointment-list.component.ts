import { Component, Pipe } from '@angular/core';
import {NgFor} from '@angular/common';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';
import { DATE_PIPE_DEFAULT_OPTIONS, DatePipe } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  //two way data binding
  newAppointmentTitle: string =  "";
  newAppointmentDate: Date = new Date();

  appointements: Appointment[] =[];
  //local storage or session
  //convert appointements object into json
  addAppointment() {
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment : Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointements.push(newAppointment)
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();
      localStorage.setItem("appointments",JSON.stringify(this.appointements));
    }
    else {
      alert('should not be empty');
    }
  }
  deleteAppointment(index: number) {
    this.appointements.splice(index,1);
    localStorage.setItem("appointments",JSON.stringify(this.appointements));
  }
  
}
