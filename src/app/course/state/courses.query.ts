import { CoursesState, CoursesStore } from "./courses.store";

import { Course } from "../model/course.model";
import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";

@Injectable({ providedIn: "root" })
export class CoursesQuery extends QueryEntity<CoursesState, Course> {
  constructor(protected store: CoursesStore) {
    super(store);
  }

  getAllCourses(term: string, sortBy: string) {
    return this.selectAll({
      sortBy: (a, b) => {
        switch (sortBy) {
          case "assending":
            return a.name.localeCompare(b.name);
          default:
            return b.name.localeCompare(a.name);
        }
      },
      filterBy: entity =>
        entity.description.toLowerCase().includes(term) ||
        entity.name.toLowerCase().includes(term)
    });
  }
}
