import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText:string="";
  @Output()
  SearchTextchange:EventEmitter<string>=new EventEmitter<string>();
  onSearhText(){
  }

  onClick(inputEl:HTMLInputElement){
    //this.searchText=event.target.value
    //console.log(inputEl.value);
    this.searchText=inputEl.value;
    this.SearchTextchange.emit(this.searchText);

  }
  

}
