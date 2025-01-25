import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { Course } from '../model/course';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit{

  @Input()
  course: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();
  
  @Input({required: true}) 
    index: number;
    

  constructor() {

  }
   ngOnInit() {

  }
  onCourseViewed() {
    console.log('View Button clicked');
    this.courseSelected.emit(this.course);
  }

}
