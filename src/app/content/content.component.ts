import { Component, OnInit } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  STORAGE_KEY = 'uuuuu';
  otherTheme ;
  k = true;
  constructor(public media: ObservableMedia) {
    console.log('kkkkkkkkkk');
    const order=localStorage.getItem('theme');


    if(order == 'true'){
      this.otherTheme=true;
    }
    else{
      this.otherTheme=false;
    }

  }

  changeTheme() {

  console.log("uuuuuuuuuuuuuuuuuuu");
    this.otherTheme = !this.otherTheme;
    if(this.otherTheme==true){
      localStorage.setItem("theme",'true');
    }
    else{
      localStorage.setItem("theme",'false');
    }
  }


  ngOnInit() {
  }

}
