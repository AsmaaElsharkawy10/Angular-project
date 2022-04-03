import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges,Output } from '@angular/core';
import { Speakers } from 'src/app/_models/speakers';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {
  @Input() rating=5;
  cropWidth=75;
  constructor() {
   }

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth=this.rating*75/5;
  }
 

  ngOnInit(): void {
  }

}
