import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSectionComponent } from './about-section/about-section.component';
import { BookingConfirmComponent } from './booking-confirm/booking-confirm.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PricelistSectionComponent} from './pricelist-section/pricelist-section.component';
import { ServicesSectionComponent} from './services-section/services-section.component';
import { TyreSearchComponent } from './tyre-search/tyre-search.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { VaboutComponent } from './vabout/vabout.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VpricelistComponent } from './vpricelist/vpricelist.component';
import { VservicesComponent } from './vservices/vservices.component';

const routes: Routes = [
 //{path:'', redirectTo:'user', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutSectionComponent},
  {path:'pricelist', component:PricelistSectionComponent},
  {path:'services', component:ServicesSectionComponent},

  {path:'user',component:UserhomeComponent},
  {path:'vehicle',component:VehicleListComponent},
  {path:'booking',component:BookingComponent},
  {path:'vabout', component:VaboutComponent},
  {path:'vpricelist', component:PricelistSectionComponent},
  {path:'vservices', component:VservicesComponent},
  {path:'tyres', component:TyreSearchComponent},
  {path:'confirm', component:BookingConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
