import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CommonModule } from "@angular/common";
import { CourseService } from "./services/course.service";
import { CoursesListComponent } from "./component/courses-list/courses-list.component";
import { CreateCourseComponent } from "./component/create-course/create-course.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [CoursesListComponent, CreateCourseComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CourseService],
  bootstrap: [],
  exports: [CoursesListComponent, CreateCourseComponent]
})
export class CourseModule {}
