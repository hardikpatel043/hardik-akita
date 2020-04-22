import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CourseModule } from "./course/course.module";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CourseModule,
    !environment.production ? AkitaNgDevtools : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
