import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BookingSharedServiceService } from '../booking-shared-service/booking-shared-service.service';
import { BookingModel } from '../model/booking-model.model';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-booking-confirm',
  templateUrl: './booking-confirm.component.html',
  styleUrls: ['./booking-confirm.component.css']
})
export class BookingConfirmComponent implements OnInit {

  bookConfirm!:BookingModel;
  pdfTable!: ElementRef;
  serviceType: any;
  time: any;

  constructor(private bookingSharedService:BookingSharedServiceService) { }

  ngOnInit(): void {
    this.bookingSharedService.currentMessage.subscribe(res => {
      this.bookConfirm = res;
    });

    this.typeAdjust();
    console.log(this.bookConfirm.name);
  }

  //ADJUST SERVICE TYPE AND TIMESLOT ACCORDING TO THE NUMBERS STORED
  typeAdjust() {
    if(this.bookConfirm.servType == 1) {
      this.serviceType = "Body Wash";
    } else if(this.bookConfirm.servType == 2) {
      this.serviceType = "Half Service";
    } else {
      this.serviceType = "Full Service";
    }

    if(this.bookConfirm.timeSlot == 1) {
      this.time = "9.00 am";
    } else if(this.bookConfirm.timeSlot == 2) {
      this.time = "1.00 pm";
    } else {
      this.time = "3.00 pm";
    }
  }

  //PDF USING SNAPSHOT
  downloadPdf() {
    var element = document.getElementById('pdfFields');

    var opt = {
      margin:       1,
      filename:     'Service Booking.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
  }


  //PDF USING FULL BODY

  // downloadPdf() {
  //   const doc = new jsPDF();

  //   const specialElementHandlers = {
  //     '#editor': function (element:any, renderer:any) {
  //       return true;
  //     }
  //   };

  //   //const pdfTable = this.pdfTable.nativeElement;

  //   doc.html(document.body, {
  //     callback: function (doc) {
  //       doc.save('Service Booking.pdf');
  //     }
  //   });
  // }

  pdfGenerate() {
    let docDefinition = {
      content: [  
        {  
          text: 'NKT AUTOMOBILES',  
          fontSize: 22,  
          bold: true,
          alignment: 'center',  
          color: '#047886'  
        },  
        {  
          text: 'BOOKING CONFIRMATION',  
          fontSize: 16,  
          bold: true,  
          alignment: 'center',  
          decoration: 'underline',  
          color: 'skyblue'  
        },
        {
          columns: [
            [
              {
                text: ' ',
                fontSize: 13,
              },
              {
                text: ' ',
                fontSize: 13,
              },
              {
                text: 'Customer Name',
                fontSize: 13,
              },
              {
                text: 'Mobile Number',
                fontSize: 13,
              },
              {
                text: 'Email Address',
                fontSize: 13,
              },
              {
                text: ' ',
                fontSize: 13,
              },
              {
                text: 'Vehicle Number',
                fontSize: 13,
              },
              {
                text: 'Vehicle Model',
                fontSize: 13,
              },
              {
                text: 'Service Type',
                fontSize: 13,
              },
              {
                text: ' ',
                fontSize: 13,
              },
              {
                text: 'Booking Date',
                fontSize: 13,
              },
              {
                text: 'Timeslot',
                fontSize: 13,
              },
              {
                text: ' ',
                fontSize: 13,
              },
              {
                text: 'Special Comments',
                fontSize: 13,
              },
            ],
            [
              {
                text: ' ',
                fontSize: 13,
              },
              {
                text: ' ',
                fontSize: 13,
              },
              {
                text: '-',
                fontSize: 13,
              },
              {
                text: '-',
                fontSize: 13,
              },
              {
                text: '-',
                fontSize: 13,
              },
              {
                text: ' ',
                fontSize: 13,
              },
              {
                text: '-',
                fontSize: 13,
              },
              {
                text: '-',
                fontSize: 13,
              },
              {
                text: '-',
                fontSize: 13,
              },
              {
                text: ' ',
                fontSize: 13,
              },
              {
                text: '-',
                fontSize: 13,
              },
              {
                text: '-',
                fontSize: 13,
              },
              {
                text: ' ',
                fontSize: 13,
              },
              {
                text: '-',
                fontSize: 13,
              },
            ],
            [
              {
                text: ' ',
                fontSize: 13,
              },
              {
                text: ' ',
                fontSize: 13,
              },
              {
                text: this.bookConfirm.name,
                fontSize: 13,
              },
              {
                text: this.bookConfirm.mobile,
                fontSize: 13,
              },
              {
                text: this.bookConfirm.email,
                fontSize: 13,
              },
              {
                text: ' ',
                fontSize: 13,
              },
              {
                text: this.bookConfirm.vehicleNo,
                fontSize: 13,
              },
              {
                text: this.bookConfirm.vehicleModel,
                fontSize: 13,
              },
              {
                text: this.serviceType,
                fontSize: 13,
              },
              {
                text: ' ',
                fontSize: 13,
              },
              {
                text: this.bookConfirm.dateServ,
                fontSize: 13,
              },
              {
                text: this.time,
                fontSize: 13,
              },
              {
                text: ' ',
                fontSize: 13,
              },
              {
                text: this.bookConfirm.comments,
                fontSize: 13,
              },
            ]
          ]
        }
      ]
    };

    pdfMake.createPdf(docDefinition).download();
    pdfMake.createPdf(docDefinition).open();
  }
}
