import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { FooterServiceComponent } from './footer-service/footer-service.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { PricelistSectionComponent } from './pricelist-section/pricelist-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { UserService } from './user.service';
import { HttpClientModule} from '@angular/common/http';
import { UserhomeComponent } from './userhome/userhome.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { BookingComponent } from './booking/booking.component';
import { VaboutComponent } from './vabout/vabout.component';
import { VservicesComponent } from './vservices/vservices.component';
import { VpricelistComponent } from './vpricelist/vpricelist.component';
import { TyreSearchComponent } from './tyre-search/tyre-search.component';
import { BookingConfirmComponent } from './booking-confirm/booking-confirm.component';
import {LubricantsComponent} from './lubricants/lubricants.component';
import {LubricantListComponent} from './lubricants/lubricant-list/lubricant-list.component';
import {LubricantItemsComponent} from './lubricants/lubricant-list/lubricant-items/lubricant-items.component';
import {LubricantDetailsComponent} from './lubricants/lubricant-details/lubricant-details.component';
import {LubricantService} from "./lubricants/lubricant.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    FooterServiceComponent,
    LoginComponent,
    HomeComponent,
    AboutSectionComponent,
    PricelistSectionComponent,
    ServicesSectionComponent,
    UserhomeComponent,
    VehicleListComponent,
    BookingComponent,
    VaboutComponent,
    VservicesComponent,
    VpricelistComponent,
    TyreSearchComponent,
    BookingConfirmComponent,
    LubricantsComponent,
    LubricantListComponent,
    LubricantItemsComponent,
    LubricantDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [UserService, LubricantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
