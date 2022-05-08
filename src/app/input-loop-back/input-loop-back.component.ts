import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-loop-back',
  templateUrl: './input-loop-back.component.html',
  styleUrls: ['./input-loop-back.component.scss']
})
export class InputLoopBackComponent implements OnInit {
  hash="";
  clear="";

  constructor() { }

  ngOnInit(): void {
  }

  getClear() {
    console.log("Request to make")
  }


}
