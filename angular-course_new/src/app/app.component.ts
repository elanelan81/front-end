import { Component, Input } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    
    courses = [...COURSES];

    
    //rxjsCourse = COURSES[1];
    //ngRx Course = COURSES[2];

    onCourseSelected(course: Course) {
        console.log("App Component - click event bubbled...",course);
    }

    trackCourse(index: number, course: Course) {
        return course.id;
    }
}
