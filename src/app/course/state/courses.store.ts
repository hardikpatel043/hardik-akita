import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";

import { Course } from "../model/course.model";
import { Injectable } from "@angular/core";

export interface CoursesState extends EntityState<Course> {}

@Injectable({
  providedIn: "root"
})
@StoreConfig({ name: "courses" })
export class CoursesStore extends EntityStore<CoursesState, Course> {}
