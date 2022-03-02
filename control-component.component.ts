import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-control-component',
  templateUrl: './control-component.component.html',
  styleUrls: ['./control-component.component.css']
})
export class ControlComponentComponent implements OnInit {



  @Output() onIncrease = new EventEmitter<string>(); //Küldi az appcomponentnek hogy minek kell módosulnia
 
  versionIncreased(value : string)  {
    this.onIncrease.emit(value);
  }


  constructor() { }

  ngOnInit(): void {
  }

 

}
