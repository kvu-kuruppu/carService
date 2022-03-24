import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

import {Lubricant} from "../lubricant.model";
import {LubricantService} from "../lubricant.service";

@Component({
  selector: 'app-lubricant-details',
  templateUrl: './lubricant-details.component.html',
  styleUrls: ['./lubricant-details.component.css']
})
export class LubricantDetailsComponent implements OnInit {
  lubricant!: Lubricant;
  id!: number;

  constructor(
    private lubricantService: LubricantService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.lubricant = this.lubricantService.getLubs(this.id);
      }
    );
  }

}
