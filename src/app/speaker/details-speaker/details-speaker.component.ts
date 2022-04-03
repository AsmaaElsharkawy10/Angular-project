import { Component, Input,Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speakers } from 'src/app/_models/speakers';

@Component({
  selector: 'app-details-speaker',
  templateUrl: './details-speaker.component.html',
  styleUrls: ['./details-speaker.component.css']
})
export class DetailsSpeakerComponent implements OnInit,OnChanges{
@Input() speakerId:number=0;
         speakerShowed:Speakers|null=null;

  constructor(public speakerService:SpeakerService) {  
  }
  ngOnChanges(changes: SimpleChanges): void {
   
      this.speakerService.getSpeakerById(this.speakerId).subscribe(
        speaker=>{this.speakerShowed=speaker})
    
  }

  ngOnInit(): void {
  }

}
