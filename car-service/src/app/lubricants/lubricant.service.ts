import {Injectable} from "@angular/core";

import {Lubricant} from "./lubricant.model";
import {LubDetail} from "./lub-detail.model";

@Injectable()
export class LubricantService {
  private lubricants: Lubricant[] = [
    new Lubricant(
      'Caltex',
      'https://greasemonkey.lk/wp-content/uploads/2017/07/CALTEX-LOGO-1-150x150.png',
      [
        new LubDetail(
          'Havoline Super 4T 20W-40 1L',
          '1,175',
          'http://greasemonkey.lk/wp-content/uploads/2017/07/HAV-S4T-20W40-400x400-1.jpg'
        ),
        new LubDetail(
          'Havoline Super 4T 20W-50 1L',
          '1,030',
          'http://greasemonkey.lk/wp-content/uploads/2017/07/HAV-S4T-20W50-400x400-1.jpg'
        ),
        new LubDetail(
          'Havoline Super 4T 10W-30 1L',
          '1,070',
          'http://greasemonkey.lk/wp-content/uploads/2017/07/HAV-S4T-10W30-400x400-1.jpg'
        ),
        new LubDetail(
          'Techron Conentrable Plus 355ML',
          '1,830',
          'http://greasemonkey.lk/wp-content/uploads/2017/07/Techron®-Concentrate-Plus-HF-355ml-322x322.jpg'
        ),
        new LubDetail(
          'Delo Gold Ultra 15W-40 5L',
          '6,570',
          'http://greasemonkey.lk/wp-content/uploads/2017/07/Delo-Gold-Ultra-15W40-5-LITER.png'
        ),
        new LubDetail(
          'Halvoline ProDS Eco5 0W-20 4L',
          '6,960',
          'http://greasemonkey.lk/wp-content/uploads/2017/07/ProDS-Eco5-0W20-4-LITER.jpg'
        ),
        new LubDetail(
          'Havoline Supermatic 4T Semi Synthetic SAE 10W-30 1L',
          '1,070',
          'http://greasemonkey.lk/wp-content/uploads/2017/07/HAV-SMT-10W30-400x400-1.jpg'
        ),
        new LubDetail(
          'CX Havoline Xtended Life Inhibitor Pre-Mixed Coolant 4L',
          '1,935',
          'http://greasemonkey.lk/wp-content/uploads/2017/07/Havoline-XLI-Pre-mixed-4-LITER.jpg'
        ),
        new LubDetail(
          'Havoline Xtended Life Inhibitor Red Pre-Mixed Coolant 4L',
          '1,820',
          'http://greasemonkey.lk/wp-content/uploads/2017/07/COOLANT-PREMIXED-RED-4l-.png'
        ),
        new LubDetail(
          'Havoline Fully Synthetic PRO DS SAE 0W-16 ECO5 3L',
          '8,005',
          'http://greasemonkey.lk/wp-content/uploads/2019/12/3L-Hav-AP-ECO5-0W16-lk.jpg'
        ),
        new LubDetail(
          'Havoline® Full Synthetic Multi-Vehicle ATF 4L',
          '8,520',
          'http://greasemonkey.lk/wp-content/uploads/2017/07/4L-Hav-Syn-ATF-322x322.png'
        ),
        new LubDetail(
          'Super Diesel CF 15W-40 5L',
          '5,110',
          'http://greasemonkey.lk/wp-content/uploads/2017/07/Super-Diesel-CF-15W-40-5L.jpg'
        )
      ]
    ),
    new Lubricant(
      'Castrol',
      'https://greasemonkey.lk/wp-content/uploads/2017/05/Castrol-150x150.png',
      [
        new LubDetail(
          'Edge Fully Synthetic Engine Oil 5W-40 4L',
          '16,400',
          'http://greasemonkey.lk/wp-content/uploads/2017/06/Edge-4L-1.png'
        ),
        new LubDetail(
          'Vection 15W-40 CI4 PLS/E7 Mineral Multigrade Oils 5L (For Diesel Engines)',
          '6,628',
          'http://greasemonkey.lk/wp-content/uploads/2019/03/Castrol-Vection-Mineral-Multigrade-Oils-for-Diesel-Engines-5L.jpg'
        ),
        new LubDetail(
          'GTX Mineral Multigrade 10W-30 4L (For Petrol Engines)',
          '6,302',
          'http://greasemonkey.lk/wp-content/uploads/2017/06/GTX-4L.png'
        ),
        new LubDetail(
          'Brake Fluid DOT 4 250ML',
          '630',
          'http://greasemonkey.lk/wp-content/uploads/2017/06/castrol-dot4.jpg'
        ),
        new LubDetail(
          'Edge 10W-60 SL/CF Fully Synthetic Oil 4L',
          '19,980',
          'http://greasemonkey.lk/wp-content/uploads/2019/01/Castrol10w60.jpg'
        ),
        new LubDetail(
          'Magnetic Semi Synthetic Oil 10W-40 4L',
          '9,562',
          'http://greasemonkey.lk/wp-content/uploads/2017/06/Magnatrec-4L.png'
        ),
        new LubDetail(
          'Edge Pro A5 5W-30 SM/GF4 Fully Synthetic Oil 1L',
          '5,243',
          'http://greasemonkey.lk/wp-content/uploads/2019/01/CASTROL-5W-30.jpg'
        ),
        new LubDetail(
          'Magnatec PRO Fully Synthetic 5W-30 1L',
          '3,406',
          'http://greasemonkey.lk/wp-content/uploads/2018/10/Castrol-Magnatec-PRO-Fully-Synthetic-5W-30-1L.jpg'
        ),
        new LubDetail(
          'GTX Mineral Multigrade 10W-40 4L',
          '6,322',
          'http://greasemonkey.lk/wp-content/uploads/2017/12/Castrol-GTX-Mineral-Multigrade-10W-40.png'
        ),
        new LubDetail(
          'Edge Pro A5 0W-30 SL/GF2 Fully Synthetic Oil 1L',
          '4,330',
          'http://greasemonkey.lk/wp-content/uploads/2019/03/Castrol-Edge-Pro-A5-0W-30-Fully-Synthetic-Oil-1L.jpg'
        ),
        new LubDetail(
          'Transmission Oil Manual GL 4 90 4L',
          '3,543',
          'http://greasemonkey.lk/wp-content/uploads/2017/06/Castrol-Manual-GL-90.png'
        ),
        new LubDetail(
          'GTX PRO Mineral Multigrade 10W-40 1L',
          '1,582',
          'http://greasemonkey.lk/wp-content/uploads/2017/12/CASTROL-GTX-PRO-10W-40.png'
        )
      ]
    ),
    new Lubricant(
      'Liqui Moly',
      'https://greasemonkey.lk/wp-content/uploads/2017/02/LIQUIMOLY-150x150.png',
      [
        new LubDetail(
          'Marder Spray (Rats Spray) 200ML',
          '1,665',
          'http://greasemonkey.lk/wp-content/uploads/2019/03/liqui-moly-marden-spray.png'
        ),
        new LubDetail(
          'Zinc Spray 400',
          '1,970',
          'http://greasemonkey.lk/wp-content/uploads/2017/03/1540.png'
        ),
        new LubDetail(
          'Motorbike Chain & Brake Cleaner 500ML',
          '1,295',
          'http://greasemonkey.lk/wp-content/uploads/2017/11/1602.jpg'
        ),
        new LubDetail(
          'Motorbike Chain Lube 250ML',
          '1,960',
          'http://greasemonkey.lk/wp-content/uploads/2017/03/1508-600x600.png'
        ),
        new LubDetail(
          'Octane Plus 150ML',
          '1,660',
          'http://greasemonkey.lk/wp-content/uploads/2017/02/2956.png'
        ),
        new LubDetail(
          'Microfiber Cloth',
          '665',
          'http://greasemonkey.lk/wp-content/uploads/2017/03/1651.png'
        ),
        new LubDetail(
          'Climate Fresh 150ML',
          '2,420',
          'http://greasemonkey.lk/wp-content/uploads/2017/03/4065.png'
        ),
        new LubDetail(
          'Windshield Super Concentrated Cleaner 250ML',
          '2,530',
          'http://greasemonkey.lk/wp-content/uploads/2017/11/2735.png'
        ),
        new LubDetail(
          'Air Flow Sensor Cleaner 200ML',
          '1,970',
          'http://greasemonkey.lk/wp-content/uploads/2017/03/4066.png'
        ),
        new LubDetail(
          'Motorbike Engine Flush 250ML',
          '1,405',
          'http://greasemonkey.lk/wp-content/uploads/2017/03/1657.png'
        ),
        new LubDetail(
          'Engine Flush Plus 300ML',
          '1,295',
          'http://greasemonkey.lk/wp-content/uploads/2017/10/Engine-Flush-Plus-300ml.jpg'
        ),
        new LubDetail(
          'Motorbike Speed Shooter 80ML',
          '415',
          'http://greasemonkey.lk/wp-content/uploads/2017/03/7820.png'
        )
      ]
    ),
    new Lubricant(
      'Mobil',
      'https://greasemonkey.lk/wp-content/uploads/2018/03/Mobil-Logo-150x150.png',
      [
        new LubDetail(
          'Multi Grease XHP 222 400G',
          '1,630',
          'http://greasemonkey.lk/wp-content/uploads/2018/04/Mobil-Multi-Grease-XHP.png'
        ),
        new LubDetail(
          'Super 1000 Mineral Multigrade 10W-30 4L',
          '5,391',
          'http://greasemonkey.lk/wp-content/uploads/2018/04/Mobil-Super-1000-10W-30.png'
        ),
        new LubDetail(
          'Multipurpose ATF 1L',
          '2,150',
          'http://greasemonkey.lk/wp-content/uploads/2018/04/Mobil-Multipurpose-ATF.png'
        ),
        new LubDetail(
          'Brake Fluid DOT 4 500ML',
          '1,680',
          'https://greasemonkey.lk/wp-content/uploads/2018/04/Mobil-Brake-Fluid-DOT4.png'
        ),
        new LubDetail(
          '1 75W-90 Synthetic ATF 1L',
          '6,730',
          'http://greasemonkey.lk/wp-content/uploads/2018/04/Mobil-1-Synthetic-ATF.png'
        ),
        new LubDetail(
          'Super 2000 X2 Semi Synthetic 10W-40 4L',
          '8,520',
          'http://greasemonkey.lk/wp-content/uploads/2018/04/Mobil-Super-2000-X2-10W-40.jpg'
        ),
        new LubDetail(
          'Super 2000 Semi Synthetic 5W-30 4L',
          '8,070',
          'http://greasemonkey.lk/wp-content/uploads/2018/10/Mobil-2000-5W30.jpg'
        ),
        new LubDetail(
          '1 Fully Synthetic 0W-20 1L',
          '4,890',
          'http://greasemonkey.lk/wp-content/uploads/2018/03/Mobile-1-0W20.png'
        ),
        new LubDetail(
          'Super 1000 X2 Mineral Multigrade 15W-40 4L',
          '6,950',
          'http://greasemonkey.lk/wp-content/uploads/2018/04/Mobil-Super-1000-15W-40-4L-5.png'
        ),
        new LubDetail(
          'ATF 3309 1L',
          '3,320',
          'http://greasemonkey.lk/wp-content/uploads/2018/04/Mobil-ATF-3309.png'
        ),
        new LubDetail(
          '1 Fully Synthetic 0W-30 1L',
          '4,890',
          'http://greasemonkey.lk/wp-content/uploads/2018/03/Mobil1-0W30.jpeg'
        ),
        new LubDetail(
          '1 Fully Synthetic 0W-40 4L',
          '20,090',
          'http://greasemonkey.lk/wp-content/uploads/2018/03/Mobile1-0W40.png'
        )
      ]
    ),
    new Lubricant(
      'Valvoline',
      'https://greasemonkey.lk/wp-content/uploads/2016/12/Valvoline-Logo-150x150.png',
      [
        new LubDetail(
          'Synpower FE Motor Oil SAE 5W-30 5L',
          '19,320',
          'http://greasemonkey.lk/wp-content/uploads/2017/06/5L.jpg'
        ),
        new LubDetail(
          'Synpower 0W-20 Synthetic Motor Oil 4L',
          '10,680',
          'http://greasemonkey.lk/wp-content/uploads/2016/11/Valvoline-8134601.jpg'
        ),
        new LubDetail(
          'Fuel Injector Plus Intake Valve Cleaner',
          '795',
          'http://greasemonkey.lk/wp-content/uploads/2016/11/DSC_1030.jpg'
        ),
        new LubDetail(
          'Maxlife DEX/MERC ATF 1L',
          '3,900',
          'http://greasemonkey.lk/wp-content/uploads/2016/11/maxlife-946ml.jpg'
        ),
        new LubDetail(
          'Champ 4T SAE 20W-40 Synthetic Blend Motor Cycle Oil 1L',
          '1,800',
          'http://greasemonkey.lk/wp-content/uploads/2016/11/valvoline-iv500355.jpg'
        ),
        new LubDetail(
          'Premium Conventional 10W-30 Petrol Motor Oil 4L',
          '8,760',
          'http://greasemonkey.lk/wp-content/uploads/2016/11/valvoline-691914.jpg'
        ),
        new LubDetail(
          'ATF Dexron 111 1L',
          '3,000',
          'http://greasemonkey.lk/wp-content/uploads/2019/08/THA19_ATF_DEXRON_III.png'
        ),
        new LubDetail(
          'All Fleet Turbo Heavy Duty Diesel Engine Oil (15W-40) 5L',
          '8,160',
          'http://greasemonkey.lk/wp-content/uploads/2016/11/valvoline-692171.jpg'
        ),
        new LubDetail(
          'Racing VR1 15W-40 Petrol Motor Oil 4L',
          '9,000',
          'http://greasemonkey.lk/wp-content/uploads/2016/11/valvoline-691920.jpg'
        ),
        new LubDetail(
          'Premium Conventional 20W-50 Petrol Motor Oil 4L',
          '8,160',
          'http://greasemonkey.lk/wp-content/uploads/2016/11/valvoline-691911.jpg'
        ),
        new LubDetail(
          'ATF DEX/MERC 3.78L',
          '7,800',
          'http://greasemonkey.lk/wp-content/uploads/2016/11/valvolin-dexrun-3.jpg'
        ),
        new LubDetail(
          'Fuel Injector Cleaner 354ML',
          '670',
          'http://greasemonkey.lk/wp-content/uploads/2016/11/DSC_1027.jpg'
        )
      ]
    ),
    new Lubricant(
      'Wurth',
      'https://greasemonkey.lk/wp-content/uploads/2016/07/wurth-150x150.png',
      [
        new LubDetail(
          'Diesel Additive Cetane Booster 300ML',
          '2,700',
          'https://greasemonkey.lk/wp-content/uploads/2019/03/125221.png'
        ),
        new LubDetail(
          'Brake Cleaner 700ML',
          '1,525',
          'https://greasemonkey.lk/wp-content/uploads/2019/03/125221.png'
        ),
        new LubDetail(
          'Throttle Valve Cleaner 500ML',
          '2,200',
          'https://greasemonkey.lk/wp-content/uploads/2019/03/125232.png'
        ),
        new LubDetail(
          'Engine Flush and Cleaner 400ML',
          '2,625',
          'https://greasemonkey.lk/wp-content/uploads/2019/03/125236.png'
        ),
        new LubDetail(
          'Rost Off Plus 400ML',
          '1,680',
          'https://greasemonkey.lk/wp-content/uploads/2021/11/download-6.jpg'
        ),
        new LubDetail(
          'Silicone Spray 500ML',
          '2,980',
          'https://greasemonkey.lk/wp-content/uploads/2021/11/1452289.webp'
        ),
        new LubDetail(
          'HHS2000 500ML',
          '2,350',
          'https://greasemonkey.lk/wp-content/uploads/2021/11/1854051.jpg'
        ),
        new LubDetail(
          'Engine Oil Treatment 300ML',
          '2,405',
          'https://greasemonkey.lk/wp-content/uploads/2021/11/125235.png'
        ),
        new LubDetail(
          'Petrol Injection System Cleaner 300ML',
          '2,700',
          'https://greasemonkey.lk/wp-content/uploads/2021/11/125230_2.jpg'
        ),
        new LubDetail(
          'Diesel Injection Cleaner 300ML',
          '2,770',
          'https://greasemonkey.lk/wp-content/uploads/2021/11/125214.webp'
        ),
        new LubDetail(
          'Diesel Treatment 300ML',
          '3,575',
          'https://greasemonkey.lk/wp-content/uploads/2021/11/21152514.webp'
        ),
        new LubDetail(
          'Diesel Particulate Filter Cleaner 400ML',
          '6,000',
          'https://greasemonkey.lk/wp-content/uploads/2019/03/128969.png'
        )
      ]
    )
  ];

  getLubricant() {
    return this.lubricants.slice();
  }

  getLubs(index: number) {
    return this.lubricants[index];
  }
}
