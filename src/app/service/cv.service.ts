import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpEvent,HttpResponse  } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Cv } from '../models/cv.model';
const baseUrl = 'http://localhost:8080/api/cvs';


@Injectable({
  providedIn: 'root'
})

export class CvService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Cv[]> {
    return this.http.get<Cv[]>(baseUrl).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }
  getCVbyId(id: number): Observable<Cv|undefined> {
    return this.http.get<Cv>(`${baseUrl}/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );;
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  update( data: any, id: any): Observable<Cv|null> {
      const httpOptios={
        headers: new HttpHeaders({'Content-type': 'application/json'})
      }
    return this.http.put(`${baseUrl}/${id}`,data,httpOptios).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
  

}
