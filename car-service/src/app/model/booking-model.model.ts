export class BookingModel {
    // public constructor(init?: Partial<BookingModel>) {
    //     Object.assign(this, init);
    // }
    name:any;
    mobile:any;
    email:any;
    vehicleNo:any;
    vehicleModel:any;
    servType:any;
    dateServ:any;
    timeSlot:any;
    comments:any;

    public constructor(name:any, mobile:any, email:any, vehicleNo:any, vehicleModel:any, servType:any,
        dateServ:any, timeSlot:any, comments:any) {
            this.name = name;
            this.mobile = mobile;
            this.email = email;
            this.vehicleNo = vehicleNo;
            this.vehicleModel = vehicleModel;
            this.servType = servType;
            this.dateServ = dateServ;
            this.timeSlot = timeSlot;
            this.comments = comments;
    }
    
}
