import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent {
  STORAGE_KEY = 'uuuuu';
  otherTheme ;
  k = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
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

    console.log(this.otherTheme);
    this.otherTheme = !this.otherTheme;
    if(this.otherTheme==true){
      localStorage.setItem("theme",'true');
    }
    else{
      localStorage.setItem("theme",'false');
    }
  }
}
