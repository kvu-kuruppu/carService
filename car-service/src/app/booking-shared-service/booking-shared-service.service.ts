import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { BookingModel } from '../model/booking-model.model';

@Injectable({
  providedIn: 'root'
})
export class BookingSharedServiceService {

  constructor() { }

  public bookConfirm:BookingModel = new BookingModel(null,null,null,null,null,null,null,null,null);

  public subject = new Subject<any>();

  private messageSource = new BehaviorSubject(this.bookConfirm);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: any) {
    this.messageSource.next(message);
  }
}
