import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // encapsulation:ViewEncapsulation.ShadowDom
  inputs:['pdata']
})
export class ChildComponent {
pdata: any;

}
