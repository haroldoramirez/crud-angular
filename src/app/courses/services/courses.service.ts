import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Course } from '../model/course';

//Injecao de dependencias
//Decorator
//Classe independente
//Prepara para quem for consumir os dados
@Injectable({

  providedIn: 'root' //Instancia dessa classe sera fornecida em carater global

})

export class CoursesService {

  private readonly API = '/assets/courses.json';

  //Injecao de dependencias
  //Importar o module na app.module.ts pra ficar disponivel de maneira global
  constructor(private httpClient: HttpClient) { }

  //Observable que retorna um array de cursos
  //Como o Generics do Java
  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),//Operador apenas obtem a primeira resposta do servidor
      delay(1500),
      tap(courses => console.log(courses))
    ); //Operadores do RXJS para manipular os dados antes de enviar ao navegador
  }

}
