import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverName: string = ""
  serverCreated: boolean = false;

  servers = ['Test server', 'Test server2']

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    },2000);
  }

  ngOnInit() {
  }

  onServerCreate() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }
}
