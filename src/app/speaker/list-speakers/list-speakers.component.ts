import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/speaker.service';
import { Speakers } from 'src/app/_models/speakers';

@Component({
  selector: 'app-list-speakers',
  templateUrl: './list-speakers.component.html',
  styleUrls: ['./list-speakers.component.css']
})
export class ListSpeakersComponent implements OnInit {
filteredString:string="";
speakerDeletId=0
speakerEditId=0;
speakerDetailsId=0;
speakers:Speakers[]=[]






  constructor( public speakerService:SpeakerService) { }

  ngOnInit(): void {
    this.speakerService.getAllSpeakers().subscribe(speakersData=>{this.speakers=speakersData});

  }

}
