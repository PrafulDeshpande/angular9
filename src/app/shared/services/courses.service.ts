import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9!!',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 12,
      title: 'js hard parts',
      description: 'will sentance course',
      percentComplete: 50,
      favorite: true
    }
  ];
  constructor() { }

  all(){
    return this.courses;
  }

  find(courseId){
    
  }

  create(course){
    console.log('create course', course);
  }
  update(course){
    console.log('update course', course);
  }

  delete(courseId){
    console.log('del course', courseId);
  }
}
