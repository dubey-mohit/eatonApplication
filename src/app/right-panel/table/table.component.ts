import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //@Input() displayedColumns: any[]=[];
  constructor(private dataService: DataServiceService) { 
  }
  
  dataSource =  this.dataService.getLanguages().datasource;
  displayedColumns = this.dataService.getLanguages().columns;

  ngOnInit() {
  }

  goToLink(){
    window.open("https://www.google.com");
  }

}
