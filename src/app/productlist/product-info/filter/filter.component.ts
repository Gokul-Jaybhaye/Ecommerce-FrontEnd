import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  instock:number=0;
  @Input()
  outofstock:number=0;
  @Input()
  all:number=0;

  @Output()
  selectr: EventEmitter<string>= new EventEmitter<string>();
 
  selectfilter:string="all";

  onchange(){
    this.selectr.emit(this.selectfilter);
     
  }

}
