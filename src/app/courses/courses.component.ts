import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;
  courses = null;

  constructor(private coursesService: CoursesService) {
    // private is access modifier and what is it?
   }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.courses=this.coursesService.all();
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    };

    this.selectedCourse = emptyCourse;
  }
 

  selectCourse(course) {
    this.selectedCourse = course;
  }

  saveCourse(course) {
    if(course.id){
    this.coursesService.update(course);
  } else {
    this.coursesService.create(course);
  }
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId);
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
