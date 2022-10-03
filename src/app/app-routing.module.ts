import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: DashboardComponent},
      { path: 'about', component: AboutComponent },
      { path: 'heroes', component: HeroesComponent }
      //{ path: 'heroes', loadChildren: () => import('./hero/hero.module').then(mod => mod.HeroModule)}
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
