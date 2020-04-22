import { CoursesState, CoursesStore } from "./courses.store";

import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";

@Injectable({ providedIn: "root" })
export class CoursesQuery extends QueryEntity<CoursesState> {
  collection$ = this.select((state: CoursesState) => state.collection);
  constructor(protected store: CoursesStore) {
    super(store);
  }
}
