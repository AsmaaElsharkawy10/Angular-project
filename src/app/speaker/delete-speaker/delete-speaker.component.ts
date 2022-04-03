import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speakers } from 'src/app/_models/speakers';

@Component({
  selector: 'app-delete-speaker',
  templateUrl: './delete-speaker.component.html',
  styleUrls: ['./delete-speaker.component.css']
})
export class DeleteSpeakerComponent implements OnInit ,OnChanges{
@Input() speakerId=0
speaker:Speakers=new Speakers(0,"",{city:"Tanta",street:"",building:0},"example@gmail.com","Student","./../../../assets/noImg.jpg")

  constructor(public speakerService:SpeakerService) { }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log( this.speakerId);

    if(!changes['speakerId'].isFirstChange())
    this.speakerService.removeSpeaker(this.speakerId).subscribe(
      a=>console.log(a)
      )
  }



}
