import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Complete remote update call
  // STEP 02: Complete remote delete call
  // STEP 03: Fix UI on completed operation

  selectedCourse = null;

  coursesInitial = null;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.loadCourses();
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

  loadCourses(){
  this.coursesService.all().subscribe(course=>this.coursesInitial=course);
  // what does subscribe does 
  }

  saveCourse(course) {
    if(course.id) {
      this.coursesService.update(course)
      .subscribe(() => this.refreshCourse());;
    } else {
      this.coursesService.create(course)
        .subscribe(() => this.refreshCourse());
    }
  }

  deleteCourse(courseId) {
    this.coursesService.delete(courseId)
    .subscribe(()=>this.refreshCourse());
  }

  cancel() {
    this.resetSelectedCourse();
  }
  refreshCourse(){
    this.resetSelectedCourse();
    this.loadCourses();
  }
}
