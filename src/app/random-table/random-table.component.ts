import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-table',
  templateUrl: './random-table.component.html',
  styleUrls: ['./random-table.component.css']
})
export class RandomTableComponent implements OnInit {
randomNumbers:number[]=[];
num:number;
selectedNum:number;
painter:number;
index:number;
  constructor() { }

  ngOnInit(): void {
    for(let i =0;i<10;i++)  {
     this.num= Math.floor(Math.random()*(100-0+1)+0);
this.randomNumbers[i]=this.num;
    }  
    
  }
  selected(){
this.selectedNum=this.painter;
  }
  clear(){
    this.selectedNum=null;
  }

}
