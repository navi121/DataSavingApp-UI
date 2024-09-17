import { Injectable } from '@angular/core';
import { Data, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploaddataServiceService {
  public list: Data[];

  readonly rootUrl = 'http://localhost:36739';

  constructor(private http: HttpClient) { }

    public uploadExcel(file: any): Observable<any> {
      const formData = new FormData();

      formData.append("file", file);
      console.log(formData.get);
      return this.http.post(this.rootUrl + '/AddFile', formData);
    }

    public getData(){
      this.http.get(this.rootUrl + '/GetData').toPromise().then(res => this.list = res as Data[]);
    }
    
}
