import { Component } from '@angular/core';
import { ApiFetchService } from '../api-fetch.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  data:any;
  constructor(private fetchService : ApiFetchService){}
  ngOnInit(){
    this.fetchService.getData().subscribe( (res:any) => {
        this.data = res;
      }
    );
  }
}
