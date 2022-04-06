import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit {
  selectedCourse;
  originalTitle;


@Input() set courseDetail(value){
  if(value){
    // console.log('Before this is', value);
    this.selectedCourse = Object.assign({}, value)
    this.originalTitle = value.title;
    console.log('After updating this is', value);
  }
  // @Input() courseDetail was changed by assigining set as above
  // in html page of the component courseDetail is replaced by selectedCourse
  // what exactly happens here?what does set means and how can a object i.e. courseDetail -
  // - can be turned into a method? (i.e. courseDetail(value))
  // When console logged the value, empty object is returned if a event is not performed 
  // when an event occurs respective object is returned
};

@Output() saved = new EventEmitter();
@Output() cancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
