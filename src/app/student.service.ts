import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './_models/students';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

   //get all speakers
   getAllStudents()
   {
     return this.http.get<Students[]>(this.baseUrl)
   }
 
   //get speaker by id
   getStudentcById(id:number)
   {
 
     return this.http.get<Students>(this.baseUrl+id)
     
   }
 
 
   addSpeaker(student:Students,file:File)
   {
 
     let speakerData = new FormData()
     speakerData.append("fullName",student.fullName)
     speakerData.append("email",student.email)
     speakerData.append("password",student.password)
     speakerData.append("department",student.department.toString())
     return this.http.post<Students>(this.baseUrl,speakerData)
   }
   updateSpeaker(speaker:Students)
   {
     return this.http.put<Students>(this.baseUrl+speaker._id,speaker);
   }
   removeSpeaker(id:number)
   {
     confirm("Are You sure?")
     return this.http.delete<Students>(this.baseUrl+id)
   }
 
   constructor(public http:HttpClient, @Inject("baseUrl") public baseUrl:string) {
     this.baseUrl += "students/"
    }
}
