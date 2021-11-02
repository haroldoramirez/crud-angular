import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  //Injecao de dependencia


  //Apenas os códigos necessários para mostrar na tela e validações
  //Dados são utilizados no service
  courses$: Observable<Course[]>;

  displayedColumns = ['name', 'category'];

   //Inicializa variaveis
   //Possivel quando service tem a tag injectable
  constructor(private coursesService: CoursesService) {

    this.courses$ = this.coursesService.list();

  }

  ngOnInit(): void {

  }

}
