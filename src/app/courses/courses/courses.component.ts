import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  //Declara variaveis
  courses: Course[];
  displayedColumns: string[];

   //Inicializa variaveis
  constructor() {
    this.courses = [
      {_id: '1', name: 'Angular', category: 'front-end'},
      {_id: '2', name: 'Java', category: 'back-end'},
      {_id: '3', name: 'Python', category: 'back-end'},
      {_id: '4', name: 'AngularJs', category: 'front-end'},
      {_id: '5', name: 'Quarkus', category: 'back-end'},
      {_id: '6', name: 'VueJs', category: 'front-end'},
      {_id: '7', name: 'Javascript', category: 'front-end'}
    ];
    this.displayedColumns = ['name', 'category'];
  }

  ngOnInit(): void {

  }

}
