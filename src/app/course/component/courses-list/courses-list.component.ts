import { Component, OnInit } from "@angular/core";

import { Course } from "./../../model/course.model";
import { CourseService } from "../../services/course.service";
import { CoursesQuery } from "../../state/courses.query";
import { Observable } from "rxjs";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html"
})
export class CoursesListComponent implements OnInit {
  courses$: Observable<Course[]>;

  courseToBeUpdated: Course;

  isUpdateActivated = false;

  constructor(
    private coursesQuery: CoursesQuery,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.courseService.getAllCourses().subscribe();
    this.courses$ = this.coursesQuery.selectAll();
  }

  deleteCourse(courseId: string) {
    this.courseService.deleteCourse(courseId).subscribe();
  }

  showUpdateForm(course: Course) {
    this.courseToBeUpdated = { ...course };
    this.isUpdateActivated = true;
  }

  updateCourse(updateForm) {
    const update: Partial<Course> = {
      ...this.courseToBeUpdated,
      ...updateForm.value
    };

    this.courseService
      .updateCourse(this.courseToBeUpdated.id, this.courseToBeUpdated)
      .subscribe();

    this.isUpdateActivated = false;
    this.courseToBeUpdated = null;
  }
}
