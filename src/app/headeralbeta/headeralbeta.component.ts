import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-headeralbeta',
  templateUrl: './headeralbeta.component.html',
  styleUrls: ['./headeralbeta.component.css']
})
export class HeaderalbetaComponent implements OnInit {
  @Output() featureSelected= new EventEmitter<string>();

  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }

  constructor() { }

  ngOnInit() {
  }

}
