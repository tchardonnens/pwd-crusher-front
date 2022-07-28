import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lookup } from 'src/app/models/lookup.model';
import { LookupService } from '../../services/lookup.service';

@Component({
  selector: 'app-input-loop-back',
  templateUrl: './input-loop-back.component.html',
  styleUrls: ['./input-loop-back.component.scss']
})
export class InputLoopBackComponent implements OnInit {
  lookupForm!: FormGroup;
  clear!: Lookup;
  hash!: string;

  constructor(
    private formBuilder: FormBuilder,
    private readonly lookupService: LookupService
  ) { }

  ngOnInit(): void {
    this.lookupForm = this.formBuilder.group({
      searchBar: ["", Validators.required]
    });
  }

  onInputLookup() {
    this.hash = this.lookupForm.value["searchBar"];
    this.lookupService.getClear(this.lookupForm.value["searchBar"]).subscribe({
      next: (data) => {
        console.log(data);
        this.clear = data;
      }, error: (err) => {
        console.log(err)
      }
    });
  };
}