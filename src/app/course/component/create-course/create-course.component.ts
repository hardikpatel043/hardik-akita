import * as uuid from "uuid";

import { Component, OnInit } from "@angular/core";

import { Course } from "./../../model/course.model";
import { CourseService } from "../../services/course.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-course",
  templateUrl: "./create-course.component.html"
})
export class CreateCourseComponent implements OnInit {
  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() {}

  onSubmit(submittedForm) {
    console.log(submittedForm.value);

    if (submittedForm.invalid) {
      return;
    }

    const course: Course = {
      id: uuid.v4(),
      name: submittedForm.value.name,
      description: submittedForm.value.description
    };

    this.courseService.createCourse(course).subscribe();
    this.router.navigateByUrl("/courses");
  }
}
