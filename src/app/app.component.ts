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
  nameError: string="";

  ngOnInit() : void{
    this.title="Hello From BridgeLabz";
    this.imgUrl="../assets/bridgelabz_logo.png";
    this.url="https://www.bridgelabz.com";
  }
  onClick($event){
    window.open(this.url,"_blank");
  }
  onInput($event){
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError="Name is Incorrect."
  }
}

