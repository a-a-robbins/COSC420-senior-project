
import { Component} from "@angular/core";
import {CoursesService} from "./course/courses.service";

//decorator function
@Component({
  //properties to tell angular how this component works
  selector: 'courses',
  template:
  /*{{ varName, method, string, etc }} allow for dynamic rendering, we have now bound our view to the component*/`
    <h2>{{ title }}</h2>
    <ul>
<!--      using a directive to modify DOM structure-->
<!--      course of courses iterates over the courses field and fills it in the course variable-->
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `

})
export class CoursesComponent {
 //3 steps for making a component
  //1. create component
  //2. register in a module
  //3. add to html markup

  title = "List of courses";
  courses;
  // courses = ["course1", "course2", "course3"];

  // getTitle() {
  //   return this.title;
  // }

  //logic for consuming https services
  constructor(service: CoursesService) {
    //new CoursesService() is tightly coupled
    this.courses = service.getCourses();
  }
}
