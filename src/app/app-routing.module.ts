import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';

const routes: Routes = [{
  path:'', component : HomeComponent
}, {
  path: 'aboutus', component : AboutUsComponent
  },
{path:'createplan' , component : CreatePlanComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
