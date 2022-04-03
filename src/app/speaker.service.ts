import { Inject ,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Speakers } from './_models/speakers';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
 
 

  //get all speakers
  getAllSpeakers()
  {
    return this.http.get<Speakers[]>(this.baseUrl)
  }

  //get speaker by id
  getSpeakerById(id:number)
  {

    return this.http.get<Speakers>(this.baseUrl+id)
    
  }


  addSpeaker(speaker:Speakers,file:File)
  {

    let speakerData = new FormData()
    speakerData.append("fullName",speaker.fullName)
    speakerData.append("role",speaker.role)
    speakerData.append("address",JSON.stringify(speaker.address))
    speakerData.append("email",speaker.email)
    speakerData.append("image",file,file.name)
    return this.http.post<Speakers>(this.baseUrl,speakerData)
  }
  updateSpeaker(speaker:Speakers)
  {
    return this.http.put<Speakers>(this.baseUrl+speaker._id,speaker);
  }
  removeSpeaker(id:number)
  {
    confirm("Are You sure?")
    return this.http.delete<Speakers>(this.baseUrl+id)
  }

  constructor(public http:HttpClient, @Inject("baseUrl") public baseUrl:string) {
    this.baseUrl += "speakers/"
   }
}
