import { Component, OnInit } from '@angular/core';
import { UploaddataServiceService } from '../Service/uploaddata-service.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {
  page: number = 1;

  constructor(public uploadDataService: UploaddataServiceService) { }

  ngOnInit(): void {
    this.uploadDataService.getData();
  }

  onScroll() {  
    this.uploadDataService.getData();
  }  

}
