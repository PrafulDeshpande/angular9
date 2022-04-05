import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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
    return this.http.put(this.getUrlByID(course.id), course)
    // console.log('UDDATE COURSE', course);
  }

  delete(courseId) {
    return this.http.delete(this.getUrlByID(courseId))
  }

  private getURL() {
    return `${Base_URL}${this.model}`
  }
  private getUrlByID(id){
    return `${this.getURL()}/${id}`
  }
}
