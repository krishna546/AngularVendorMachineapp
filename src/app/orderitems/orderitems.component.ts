import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-orderitems',
  templateUrl: './orderitems.component.html',
  styleUrls: ['./orderitems.component.css']
})
export class OrderitemsComponent implements OnInit {
  @Input() totaldepositedamount:number;  

  constructor(private service:SharedService) { }

  ProductList:any=[];
  productcost;
  //depositedamount:Number;
  totalcost:number;
  balance;


  ngOnInit() {
    this.loadProductsList();
  }

  loadProductsList(){
    this.service.getProductsList().subscribe(data=>{
      this.ProductList=data;
    });
  }

  setdeposit(inputcost:number){
    this.totalcost=inputcost ;
    
  }

  submitorder(){
    if(this.totaldepositedamount >= this.totalcost){
      this.balance=this.totaldepositedamount-this.totalcost
      alert('Order placed successfully.Please collect your order and remaining balance of '+  this.balance)
    }
    else{
      alert('Sorry the order could not be placed due to insufficient funds')
    }


  }

 


}
