import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleListComponent } from './example-list/example-list.component';
import { CurrentListComponent } from './current-list/current-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'example-list', pathMatch: 'full' },
  { path: 'example-list', component: ExampleListComponent },
  { path: 'current-list', component: CurrentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
