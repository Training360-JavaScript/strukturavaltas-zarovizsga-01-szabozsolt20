import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Construction } from '../model/construction';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  apiUrl = environment.apiUrl + 'constructions';
  //endPoint = 'constructions';


  constructor(private http: HttpClient) { }

  getAll(): Observable<Construction[]> {
    return this.http.get<Construction[]>(this.apiUrl);
  }

  get(id: number): Observable<Construction[]> {
    return this.http.get<Construction[]>(`${this.apiUrl}/${id}`);
  }

  update(construction: Construction): Observable<Construction> {
    return this.http.patch<Construction>(`${this.apiUrl}/${construction.id}`, construction);
  }

  create(construction: Construction): Observable<Construction> {
    return this.http.post<Construction>(this.apiUrl, construction);
  }

  delete(construction: Construction): Observable<Construction> {
    return this.http.delete<any>(`${this.apiUrl}/${construction.id}`);
  }

}
