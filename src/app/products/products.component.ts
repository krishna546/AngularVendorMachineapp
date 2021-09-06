import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProductsList:any=[];


  ngOnInit() {
    this.loadProductsList();
  }

  loadProductsList(){
    this.service.getProductsList().subscribe(data=>{
      this.ProductsList=data;
    });
  }

}
