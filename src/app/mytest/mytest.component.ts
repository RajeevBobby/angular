import { Component } from '@angular/core';

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.css']
})
export class MytestComponent {
  ShowDiv:boolean=true;
  test1:boolean=true;
  newPmName:string='';
  India_PMList:string[]=['Modi','Manmohan','Vajpayee','Gujral','Deve Gowda'];
  isPresent:boolean=false;
  ToggleDiv(){
    this.ShowDiv=!this.ShowDiv;
    console.log('From ToggleDiv');
  }
  AddNewEntry(){
    this.isPresent=false;
    var foundString =this.India_PMList.find((nm)=> nm.toUpperCase()==this.newPmName.toUpperCase());
    if(foundString!=undefined){
      this.isPresent=true;
    }
    else{
      this.India_PMList.push(this.newPmName);
    }
    
  }
  RemoveItem(idx:number){
    this.India_PMList.splice(idx,1);
  }
}
