import {Component, OnInit} from '@angular/core';

import {Lubricant} from "../lubricant.model";
import {LubricantService} from "../lubricant.service";

@Component({
  selector: 'app-lubricant-list',
  templateUrl: './lubricant-list.component.html',
  styleUrls: ['./lubricant-list.component.css']
})
export class LubricantListComponent implements OnInit {
  lubricants!: Lubricant[];

  constructor(private lubricantService: LubricantService) {
  }

  ngOnInit(): void {
    this.lubricants = this.lubricantService.getLubricant();
  }

}
