import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

  MyContact: any

  // selectedState: string = ''

  ngOnInit(): void {
    this.MyContact = {
      UserName: "",
      email: "",
      password: "",
      confirm_password: "",
      courses: [
        { name: 'Maths', selected: false },
        { name: 'Physics', selected: false },
        { name: 'Chemistry', selected: false }
      ],
      states: ['State 1', 'State 2', 'State 3']
    }; 
  }

  // selectState(state: string) {
  //   this.selectedState = state;
  // }

  // updateSelectedCourses() {
  //   let selectedCourses = this.MyContact.courses
  //     .filter((course: { name: string, selected: boolean }) => course.selected)
  //     .map((course: { name: string }) => course.name);

  //   this.MyContact.selectedCourses = selectedCourses.join(', ');
  // }

  OnSubmit() {

  
    console.log(this.MyContact);
  }

}
