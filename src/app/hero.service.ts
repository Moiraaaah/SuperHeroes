import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private urlJSON = 'https://akabab.github.io/superhero-api/api/all.json';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<any> {
    return this.http.get<any>(this.urlJSON);
  }
}
