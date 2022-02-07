import { Component, OnInit } from '@angular/core';
import { BookingSharedServiceService } from '../booking-shared-service/booking-shared-service.service';
import { BookingModel } from '../model/booking-model.model';

@Component({
  selector: 'app-booking-confirm',
  templateUrl: './booking-confirm.component.html',
  styleUrls: ['./booking-confirm.component.css']
})
export class BookingConfirmComponent implements OnInit {

  bookConfirm!:BookingModel;

  constructor(private bookingSharedService:BookingSharedServiceService) { }

  ngOnInit(): void {
    this.bookingSharedService.currentMessage.subscribe(res => {
      this.bookConfirm = res;
    });

    console.log(this.bookConfirm.name);
  }

}
