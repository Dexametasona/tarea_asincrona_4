import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  saludo=''
  @Input() hijo:string=''
  @Output() mensaje=new EventEmitter<string>()
  
  enviar(){
    this.mensaje.emit(this.saludo)
  }
}
