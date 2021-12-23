import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploaddataServiceService {

  readonly rootUrl = 'http://localhost:36739';

  constructor(private http: HttpClient,
    private router: Router) { }

    public uploadExcel(file: any) {
      const formData = new FormData();

      formData.append("file", file);
      console.log(formData.get);
      return this.http.post(this.rootUrl + '/AddFile', formData);
    }
    
}
