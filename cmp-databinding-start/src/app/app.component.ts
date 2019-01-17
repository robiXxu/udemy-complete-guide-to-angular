import { Component } from '@angular/core';
import { Server } from 'src/models/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  serverElements: Array<Server> = [];

  onServerAdded(server: Server) {
    console.log(server);
    this.serverElements.push(server);
  }
}
