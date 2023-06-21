import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
ServicesService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(private service: ServicesService) {}
  pcdata:any;
  cdData:any;


  ngOnInit(): void {  
    this.pcdata = this.service.pcdetails;
    this.cdData = this.service.cdDetails;

  }
}
