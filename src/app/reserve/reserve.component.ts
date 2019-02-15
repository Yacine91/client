import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  reservationForm: FormGroup;
  date = new Date();
  timeOptions = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00"]
  peopleOptions = [1, 2, 3, 4, 5, 6, 7, 8]
  client = {first_name: "", last_name: "", email: "", phone: ""}

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

}
