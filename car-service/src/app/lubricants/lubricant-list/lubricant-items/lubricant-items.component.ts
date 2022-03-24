import {Component, Input, OnInit} from '@angular/core';

import {Lubricant} from "../../lubricant.model";

@Component({
  selector: 'app-lubricant-items',
  templateUrl: './lubricant-items.component.html',
  styleUrls: ['./lubricant-items.component.css']
})
export class LubricantItemsComponent implements OnInit {
  @Input() lubricant: Lubricant;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
