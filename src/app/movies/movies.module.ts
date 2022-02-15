import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { MovieContainerComponent } from './movie-container/movie-container.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MovieFormComponent } from './movie-form/movie-form.component';


@NgModule({
  declarations: [
    MovieContainerComponent,
    MovieListComponent,
    MovieFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports:[
    MovieContainerComponent,
    MovieListComponent,
    MovieFormComponent
  ]
})
export class MoviesModule { }
