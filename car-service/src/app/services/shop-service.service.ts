import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {

  constructor(private httpClient:HttpClient) { }

  getTyres(width: any, rim: any) {
    return this.httpClient.get('http://localhost:3000/api/tyre/find/'+width+'/'+rim);
  }
}
