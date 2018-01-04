import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <p>
     hello-world works inline!
   </p>
   `,
  templateUrl: './app.component.html', // it is loaded if exits template and templateUrl
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  constructor() { 
    console.log(this.title);
  }

  ngOnInit() {
  }

}
