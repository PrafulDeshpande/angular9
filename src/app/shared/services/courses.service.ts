import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const BASE_URL = 'http://localhost:3000/';


const Base_URL = "http://localhost:3000/";
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private model = 'courses'; 

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(this.getURL());
  }

  find(courseId) {

  }

  create(course) {
   return this.http.post(this.getURL(), course)
  }

  update(course) {
    console.log('UDDATE COURSE', course);
  }

  delete(courseId) {
    console.log('DLETE COURSE', courseId);
  }

  private getURL() {
    return `${Base_URL}${this.model}`
  }
}
