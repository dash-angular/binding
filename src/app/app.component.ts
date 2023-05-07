import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Binding';
  msg="I am property binding";
  msg1="";

onchange(){
  // console.log(val);
  this.msg1="I am Event binding";
}
binding="I am two way binding";
}
