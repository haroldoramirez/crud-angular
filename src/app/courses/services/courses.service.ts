import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Course } from '../model/course';

//Injecao de dependencias
//Decorator
//Classe independente
//Prepara para quem for consumir os dados
@Injectable({

  providedIn: 'root' //Instancia dessa classe sera fornecida em carater global

})

export class CoursesService {

  //Injecao de dependencias
  //Importar o module na app.module.ts pra ficar disponivel de maneira global
  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      {_id: '1', name: 'Angular', category: 'front-end'},
      {_id: '2', name: 'Java', category: 'back-end'},
      {_id: '3', name: 'Python', category: 'back-end'},
      {_id: '4', name: 'AngularJs', category: 'front-end'},
      {_id: '5', name: 'Quarkus', category: 'back-end'},
      {_id: '6', name: 'VueJs', category: 'front-end'},
      {_id: '7', name: 'Javascript', category: 'front-end'}
    ];
  }

}
