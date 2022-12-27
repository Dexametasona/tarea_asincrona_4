import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  saludo=''
  carta:string=''
  recibir($event:any){
    this.carta=$event
  }
}
