import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[success]',
  template: `
    <div>
      Success!!!
    </div>
  `,
  styles: [`
    div {
      background-color: green;
      color: white;
      padding: 10px;
      border-radius: 5px;
      width: 70px;
    }
  `]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
