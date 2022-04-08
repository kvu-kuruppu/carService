import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingServiceService } from '../booking-service/booking-service.service';
import { BookingSharedServiceService } from '../booking-shared-service/booking-shared-service.service';
import { BookingModel } from '../model/booking-model.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  form!:FormGroup;
  displayError:boolean=false;
  data:any;
  bookConfirm!:BookingModel;
  dateErr:boolean=false;
  
  constructor(private bookingService: BookingServiceService, private formBuilder: FormBuilder, 
    private router: Router, private bookingSharedService: BookingSharedServiceService) { }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      vehicleNo: ['', Validators.required],
      vehicleModel: ['', Validators.required],
      servType: ['', Validators.required],
      dateServ: ['', Validators.required],
      timeSlot: ['', Validators.required],
      comments: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  get f() {
    return this.form.controls;
  }

  // clearTimeSlot() {
  //   this.form.value.dateServ = '';
  // }

  makeBooking() {
    if(this.form.invalid) {
      console.log(458000);
    }

    this.bookingService.getBookingByDate(this.form.value.dateServ, this.form.value.timeSlot).subscribe(res => {
      if(Object.keys(res).length >= 3) {
        this.displayError=true;
        this.dateErr=true;
        //this.clearTimeSlot();
      }
      else {
        this.addBooking();
        this.bookConfirm = new BookingModel(this.form.value.name, this.form.value.mobile, this.form.value.email, 
          this.form.value.vehicleNo, this.form.value.vehicleModel, this.form.value.servType, this.form.value.dateServ, 
          this.form.value.timeSlot, this.form.value.comments);

        this.bookingSharedService.changeMessage(this.bookConfirm)
        this.router.navigateByUrl('/confirm');
      }
    });
  }

  addBooking() {
    this.bookingService.addBooking(this.form.value).subscribe(res => {
      this.data = res;
      console.log('hhhhhhhhhhhh')
    });
  }

}
