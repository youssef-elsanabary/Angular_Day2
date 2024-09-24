import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from "./student/student.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudentDepartment';
}
