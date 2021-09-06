import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-depositcoins',
  templateUrl: './depositcoins.component.html',
  styleUrls: ['./depositcoins.component.css']
})
export class DepositcoinsComponent implements OnInit {

  constructor(private service:SharedService) { }

  CoinsList:any=[];
  depositedcoin: string;
  depositedamount:Number;
  //coins: string[] = ['Nickel', 'Dime', 'Quarter'];

  totaldepositedamount:Number;
  displayOrder = false;


  ngOnInit() {
    this.loadCoinsList();
  }

  loadCoinsList(){
    this.service.getCoinsList().subscribe(data=>{
      this.CoinsList=data;
    });
  }

  setdeposit(coinvalue:Number){
    this.totaldepositedamount=coinvalue ;
    this.displayOrder = true;

    
  }

  


}
