import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";

import { Course } from "../model/course.model";
import { Injectable } from "@angular/core";

export interface CoursesState extends EntityState<Course> {
  collection: Course[];
}

export function createInitialState(): CoursesState {
  return {
    collection: []
  };
}

@Injectable({
  providedIn: "root"
})
@StoreConfig({ name: "courses" })
export class CoursesStore extends EntityStore<CoursesState> {
  constructor() {
    super(createInitialState());
  }
}
