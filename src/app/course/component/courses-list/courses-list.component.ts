import { Component, OnInit } from "@angular/core";
import { startWith, switchMap } from "rxjs/operators";

import { Course } from "./../../model/course.model";
import { CourseService } from "../../services/course.service";
import { CoursesQuery } from "../../state/courses.query";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html"
})
export class CoursesListComponent implements OnInit {
  courses$: Observable<Course[]>;

  courseToBeUpdated: Course;

  isUpdateActivated = false;
  search = new FormControl();

  constructor(
    private coursesQuery: CoursesQuery,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.courseService.getAllCourses().subscribe();

    this.courses$ = this.search.valueChanges.pipe(
      startWith(""),
      switchMap(value =>
        this.coursesQuery.selectAll({
          filterBy: entity =>
            entity.name.toLowerCase().includes(value) ||
            entity.description.toLowerCase().includes(value)
        })
      )
    );
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
