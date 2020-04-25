import { CoursesState, CoursesStore } from "./courses.store";

import { Course } from "../model/course.model";
import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";

@Injectable({ providedIn: "root" })
export class CoursesQuery extends QueryEntity<CoursesState, Course> {
  constructor(protected store: CoursesStore) {
    super(store);
  }
}
