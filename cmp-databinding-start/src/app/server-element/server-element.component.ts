import { Component, OnInit, Input } from '@angular/core';
import { Server } from 'src/models/server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: Server;
  constructor() { }

  ngOnInit() {
  }

}