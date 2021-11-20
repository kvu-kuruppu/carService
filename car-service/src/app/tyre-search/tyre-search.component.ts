import { Component, OnInit } from '@angular/core';
import { Tyre } from '../model/tyre.model';
import { ShopServiceService } from '../services/shop-service.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tyre-search',
  templateUrl: './tyre-search.component.html',
  styleUrls: ['./tyre-search.component.css']
})
export class TyreSearchComponent implements OnInit {
  form!: FormGroup;
  tyre: any;
  data: any;
  display:boolean=false;

  constructor(private shopService: ShopServiceService, private formBuilder: FormBuilder) { }

  createForm() {
    this.form = this.formBuilder.group({
      width: ['', Validators.required],
      rim: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  get f() {
    return this.form.controls;
  }

  getData() {
    this.shopService.getTyres(this.form.value.width, this.form.value.rim).subscribe(res => {
      this.tyre = res;
      this.display = true;
    });
  }

}
