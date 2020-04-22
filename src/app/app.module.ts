import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CourseModule } from "./course/course.module";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CourseModule,
    AkitaNgDevtools
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
