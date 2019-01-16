import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.warning',
  template: `
    <div>
      Warning!!!
    </div>
  `,
  styles: [`
    div { 
      background-color: red;
      color: white;
      padding: 10px;
      border-radius: 5px;
      width: 70px;
    }
  `]
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
