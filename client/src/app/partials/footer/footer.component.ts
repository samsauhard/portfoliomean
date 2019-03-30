import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
copy:string
year:number;
  constructor() { }

  ngOnInit() {
  this.copy = '© 2018 Copyright:';
  const date = new Date();
  this.year = date.getFullYear();
  }

}
