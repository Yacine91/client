import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  reservationForm: FormGroup;
  date = new Date();
  isScheduleOk = false;
  timeOptions = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00"]
  peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8]
  client = { first_name: "", last_name: "", email: "", phone: "" }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reservationForm = this.fb.group({
      date: new Date(),
      time: "",
      people: 1
    })
  }

  finalizeReservation(form) {
    if (form.value) {
      console.log('valid!')
      console.log(form.value)
      console.log(form)
    }
  }

  saveReservation(){
    if(this.reservationForm.valid){
      console.log(this.reservationForm)
      this.isScheduleOk = true
    }
  }



}

