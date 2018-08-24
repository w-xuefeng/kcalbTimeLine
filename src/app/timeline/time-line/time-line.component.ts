import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  @Input('style') public style: any = {
    wrap: {},
    node: {},
    reverse: false
  };
  @Input('headConfig') public headConfig = {
    baseUrl: '',
    baseName: '',
    baseType: 'jpg',
  };
  @Input('hostHead') public hostHead = {
    img: 'https://pub.wangxuefeng.com.cn/asset/defaultHead/avatar.png',
    alt: '点我逆序排列',
    name: 'XueF°',
    sub: '记录每一次改变'
  };
  @Input('data') public data: any = [
    {
      id: 1,
      date: this.getDate(),
      title: 'kcalb',
      textContent: 'Hello world',
      img: 'https://kcalb.wang/img/head/kcalb_13.jpg',
      click: ''
    },
    {
      id: 2,
      date: this.getDate(),
      title: 'XueFeng',
      textContent: 'Hello world',
      img: 'https://pub.wangxuefeng.com.cn/asset/defaultHead/avatar.png',
      click: ''
    }
  ];

  constructor() { }

  getDate() {
    const now = new Date();
    return `${now.getFullYear()}-${this.addZero(now.getMonth() + 1)}-${this.addZero(now.getDate())}`;
  }
  addZero(x) {
    return x < 10 && x > 0 ? `0${x}` : x;
  }
  go(e) {
    if(e.trim().length > 0){
      window.open(e);
    }
  }
  ngOnInit() {
  }
}
