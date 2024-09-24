import { Component, OnInit, signal } from '@angular/core';
import { Student } from '../_Modules/student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  allStudents : Student[] =[];
  newStudent : Student = new Student(0,"",0,"",0);
  // studentDetails : Student = this.allStudents[0]
  studentDetails= signal(this.allStudents[0]) //#for best preformance
  n =3;
  constructor(){
  }
   ngOnInit(){
    this.allStudents =[
      new Student(1,"Youssef",24,"Damietta",1),
      new Student(2,"Omnia",24,"Damietta",1),
      new Student(3,"Omar",26,"Damietta",3),
      new Student(4,"Mohamed",28,"Damietta",2)
    ]
  // studentDetails= this.allStudents[0]
    this.studentDetails =signal( this.allStudents[0]) //#for best preformance
   }
   show(id :number){
    for (let index = 0; index < this.allStudents.length; index++) {
      if (this.allStudents[index].Id == id) {
        //this.studentDetails = this.allStudents[index]
        this.studentDetails.set(this.allStudents[index])//for best preformance
        break;
      }
      
    }
   }
   Add(){
    this.allStudents.push(new Student(
      this.newStudent.Id,
      this.newStudent.Name,
      this.newStudent.Age,
      this.newStudent.Address,
      this.newStudent.DeptNo));
      
      this.newStudent = new Student(0,"",0,"",0);
   }
}
