import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(private httpClient:HttpClient) { }

  //ADD A NEW BOOKING
  addBooking(data: any) {
    return this.httpClient.post('http://localhost:8080/api/service/add', data);
  }

  //FIND BOOKING BY DATE
  getBookingByDate(date: Date, time: any) {
    return this.httpClient.get('http://localhost:8080/api/service/getdate/'+date+'/'+time);
  }
}
