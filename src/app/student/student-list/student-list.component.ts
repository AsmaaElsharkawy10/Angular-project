import { Component, OnInit } from '@angular/core';
import { Students } from './../../_models/students';
import { StudentService } from './../../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 students:Students[]=[]
 load()
 {
   this.studentService.getAllStudents().subscribe(data=>
    this.students=data
    )
 }
  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
  }

}
