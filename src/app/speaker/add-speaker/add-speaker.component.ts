import { Component, OnInit } from '@angular/core';
import { Speakers } from 'src/app/_models/speakers';
import { SpeakerService } from 'src/app/speaker.service';

@Component({
  selector: 'app-add-speaker',
  templateUrl: './add-speaker.component.html',
  styleUrls: ['./add-speaker.component.css']
})
export class AddSpeakerComponent implements OnInit {
newSpeaker:Speakers = new Speakers(0,"",{city:"Tanta",street:"",building:0},"example@gmail.com","","assets/noImg.jpg")
speakers:Speakers[]=[];
file:any;
onFileChange(e:any)
{
  this.file=e.target.files[0]
}
save()
{
  this.speakerService.addSpeaker(this.newSpeaker,this.file).subscribe(speaker=>console.log(speaker))
}  

constructor(public speakerService:SpeakerService) { }

  ngOnInit(): void {

  }

}
