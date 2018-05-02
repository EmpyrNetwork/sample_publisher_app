import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

@Output() itemWasSelected = new EventEmitter<any>();


suggestion:boolean;
location: boolean;
selected : number;
highlight : Function;

suggestions:any[]=[
				{id:1,Name:'Restaurants'},
				{id:2,Name:'Bars'},
				{id:3,Name:'Food'},
				{id:4,Name:'Delivery'},
				{id:5,Name:'TakeOut'},
				{id:6,Name:'Reservations'},
				{id:7,Name:''}
				];
				
  selectedValue:any= {id:7,Name:''};


  
  constructor(){
  
  this.highlight = function(index){
            this.selected = index;
  }
 };
 
 onItemSelected():any{
 this.itemWasSelected.emit(this.selectedValue.Name);
 
 }
}
