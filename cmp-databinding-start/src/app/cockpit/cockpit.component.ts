import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Server } from 'src/models/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<Server>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  
  onAddServer(serverNameInput) {
     this.serverCreated.emit(new Server('server', serverNameInput.value, this.serverContentInput.nativeElement.value));
  }

  onAddBlueprint(serverNameInput) {
    this.serverCreated.emit(new Server('blueprint', serverNameInput.value, this.serverContentInput.nativeElement.value));
  }

}
