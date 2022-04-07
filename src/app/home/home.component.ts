import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  currentLesson = null;

  // CHALLENGE
  // STEP 01: Create a lessonsList component
  // hint: ng g c lessonsList -d
  // STEP 02: create the aprropriate inputs and outputs
  // STEP 03: Render List component
  

  courseLessons = null;

  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.courseLessons = this.lessonsService.all();
  }

  selectLesson(lesson) {
    console.log('SELECT LESSON FIRED!', lesson);
    this.currentLesson = lesson;
  }
}
