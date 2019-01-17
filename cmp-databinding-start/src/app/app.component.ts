import { Component } from '@angular/core';
import { Server } from 'src/models/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  serverElements: Array<Server> = [];

  onServerAdded(server: Server) {
    this.serverElements.push(server);
  }
  changeFirstEl() {
    if( this.serverElements.length === 0 ) return;
    this.serverElements[0].serverName = "Changed!!"; 
  }
  removeFirstEl(){
    if( this.serverElements.length === 0 ) return;
    this.serverElements.splice(0,1);
  }
}
