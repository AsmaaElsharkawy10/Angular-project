import { Component, Input, OnInit, OnChanges,SimpleChanges } from '@angular/core';
import { Speakers } from './../../_models/speakers';
import { SpeakerService } from 'src/app/speaker.service';

@Component({
  selector: 'app-edit-speaker',
  templateUrl: './edit-speaker.component.html',
  styleUrls: ['./edit-speaker.component.css']
})
export class EditSpeakerComponent implements OnInit,OnChanges{
@Input() speakerID=0;
speaker:Speakers =new Speakers(0,"",{city:"Tanta",street:"",building:0},"example@gmail.com","Student","assets/noImg.jpg");
speakers:Speakers[]=[]

  constructor(public SpeakerService:SpeakerService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['speakerID'].isFirstChange()){
      this.SpeakerService.getSpeakerById(this.speakerID).subscribe(a=>this.speaker=a)
      this.SpeakerService.getAllSpeakers().subscribe(a=>this.speakers=a)
    }
  }
 
 
  save(){
    this.SpeakerService.updateSpeaker(this.speaker).subscribe(a=>console.log(a));
  }
  ngOnInit(): void {
  }

}
