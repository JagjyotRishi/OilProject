import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelOneComponent } from './level-one/level-one.component';
import { LevelTwoComponent } from './level-two/level-two.component';
import { LevelThreeComponent } from './level-three/level-three.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "level-one" },
  { path: "level-one", component: LevelOneComponent },
  { path: "level-two", component: LevelTwoComponent },
  { path: "level-three", component: LevelThreeComponent },
  { path: "**", component: LevelOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
