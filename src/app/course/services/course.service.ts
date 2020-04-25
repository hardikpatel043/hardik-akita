import { Course } from "./../model/course.model";
import { CoursesStore } from "../state/courses.store";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class CourseService {
  http: HttpClient;

  constructor(http: HttpClient, private coursesStore: CoursesStore) {
    this.http = http;
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>("/api/courses").pipe(
      tap((result: any) => {
        this.coursesStore.set(result);
      })
    );
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>("/api/courses", course).pipe(
      tap((result: any) => {
        this.coursesStore.add(course);
      })
    );
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete("/api/courses/" + courseId).pipe(
      tap((result: any) => {
        this.coursesStore.remove(courseId);
      })
    );
  }

  updateCourse(
    courseId: string | number,
    changes: Partial<Course>
  ): Observable<any> {
    return this.http.put("/api/courses/" + courseId, changes).pipe(
      tap((result: any) => {
        this.coursesStore.update(courseId, changes);
      })
    );
  }
}
