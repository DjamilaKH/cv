import { Component, OnInit } from '@angular/core';
import { Cv } from 'src/app/models/cv.model';

@Component({
  selector: 'app-addcv',
  template: ` <h1>Créer un CV</h1>
  <app-formmcv [cv]="cv"></app-formmcv>`,
})
export class AddcvComponent  {
  cv!: Cv;
  ngOnInit(){
    this.cv= new Cv();
  }
  
}
