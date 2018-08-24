import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backtop',
  templateUrl: './backtop.component.html',
  styleUrls: ['./backtop.component.css']
})
export class BacktopComponent implements OnInit {

  needBack = false;

  constructor() {
    window.onscroll = () => {
      this.needBack = window.scrollY > 0;
    }
  }

  ngOnInit() {
  }

  backtop() {
    let scrollToptimer = setInterval(function () {
      let top = document.body.scrollTop || document.documentElement.scrollTop;
      let speed = top / 4;
      if (document.body.scrollTop != 0) {
        document.body.scrollTop -= speed;
      } else {
        document.documentElement.scrollTop -= speed;
      }
      if (top == 0) {
        clearInterval(scrollToptimer);
      }
    }, 30);
  }

}
