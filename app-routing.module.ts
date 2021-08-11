import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"question",component:QuestionComponent},
  {path:"review", component:ReviewComponent},
  {path:"result", component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
