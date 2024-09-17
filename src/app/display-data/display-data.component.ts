import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UploaddataServiceService } from '../Service/uploaddata-service.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
  public display: boolean = false;
  public files: string[] = [];
  public errorMessage: boolean = false;

  constructor(public uploadDataService: UploaddataServiceService) { }

  onChange(event: any) {
    this.uploadDataService.getData();
    if (event.target.value == "DISPLAY") {
      this.display = true;
    }
    else {
      this.display = false;
    }
  }

  ngOnInit(): void {
    this.uploadDataService.getData();
  }

  public fileUpload(event: any) {
    this.files = event.target.files[0];
  }

  public async OnSubmit(): Promise<void> {
    
    try {
      await this.uploadDataService.uploadExcel(this.files).toPromise();
      this.errorMessage = false;
    }
    
    catch (errorMessage) {
      if (errorMessage.status === 401 || errorMessage.status === 400) {
        this.errorMessage = true;
      }
    }
  }
}
