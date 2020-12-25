import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl="";
  url="";
  userName: string="";

  ngOnInit() : void{
    this.title="Hello From BridgeLabz";
    this.imgUrl="../assets/bridgelabz_logo.png";
    this.url="https://www.bridgelabz.com";
  }
  onClick($event){
    window.open(this.url,"_blank");
  }
}

