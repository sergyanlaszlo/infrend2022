import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'semantic-version';

major=0;
minor=0;
patch=0;



increaseMajor() {
  this.major++;
  this.minor=0;
  this.patch=0;
}

increaseMinor() {
  this.minor++;
  this.patch=0;
}

increasePatch() {
this.patch++;
}

handleincrease(type : string) {
  if(type === "major") {
    this.increaseMajor;
  }
  if(type === "minor") {
    this.increaseMinor;
  }
  if (type ==="patch") {
    this.increasePatch;
  }
   
}
}



