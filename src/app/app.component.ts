import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl="";

  ngOnInit() : void{
    this.title="Hello From BridgeLabz";
    this.imgUrl="../assets/bridgelabz_logo.png";
  }
}

