import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputLoopBackComponent } from './components/input-loop-back/input-loop-back.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'lookup', component: InputLoopBackComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
